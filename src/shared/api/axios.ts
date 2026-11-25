import { useAuthStore } from '@/store/authStore'
import axios, { AxiosError, type InternalAxiosRequestConfig } from 'axios'

const api = axios.create({
	baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000',
	withCredentials: true,
})

let isRefreshing = false
let failedQueue: Array<{
	resolve: (value?: unknown) => void
	reject: (reason?: unknown) => void
}> = []

const processQueue = (error: unknown, token: string | null = null) => {
	failedQueue.forEach((prom) => {
		if (error) {
			prom.reject(error)
		} else {
			prom.resolve(token)
		}
	})
	failedQueue = []
}

api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
	const token = useAuthStore.getState().accessToken
	if (token && config.headers) {
		config.headers.Authorization = `Bearer ${token}`
	}
	return config
})

api.interceptors.response.use(
	(response) => response,
	async (error: AxiosError) => {
		const originalRequest = error.config as InternalAxiosRequestConfig & {
			_retry?: boolean
		}

		const authEndpoints = ['/auth/login', '/auth/refresh', '/auth/logout']
		const isAuthEndpoint = authEndpoints.some((endpoint) =>
			originalRequest.url?.includes(endpoint),
		)

		if (
			error.response?.status === 401 &&
			!originalRequest._retry &&
			!isAuthEndpoint
		) {
			if (isRefreshing) {
				return new Promise((resolve, reject) => {
					failedQueue.push({ resolve, reject })
				})
					.then((token) => {
						if (originalRequest.headers) {
							originalRequest.headers.Authorization = `Bearer ${token}`
						}
						return api(originalRequest)
					})
					.catch((err) => Promise.reject(err))
			}

			originalRequest._retry = true
			isRefreshing = true

			try {
				const { data } = await api.post('/auth/refresh')
				const newAccessToken = data.accessToken

				useAuthStore.getState().setAccessToken(newAccessToken)

				processQueue(null, newAccessToken)

				if (originalRequest.headers) {
					originalRequest.headers.Authorization = `Bearer ${newAccessToken}`
				}
				return api(originalRequest)
			} catch (refreshError) {
				processQueue(refreshError, null)
				useAuthStore.getState().logout()
				if (typeof window !== 'undefined') {
					window.location.href = '/login'
				}
				return Promise.reject(refreshError)
			} finally {
				isRefreshing = false
			}
		}

		return Promise.reject(error)
	},
)

export default api
