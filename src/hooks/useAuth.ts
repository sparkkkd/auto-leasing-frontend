import { useAuthStore } from '../store/authStore'

export const useAuth = () => {
	const { user, accessToken, setAccessToken, logout } = useAuthStore()

	return {
		user,
		accessToken,
		setAccessToken,
		logout,
	}
}
