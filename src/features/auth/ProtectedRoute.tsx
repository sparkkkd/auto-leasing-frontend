import { refreshApi } from '@/entities/user/api'
import { useAuth } from '@/hooks/useAuth'
import { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export const ProtectedRoute = () => {
	const { isAuthenticated, setAuth, logout } = useAuth()
	const [isLoading, setIsLoading] = useState<boolean>(!isAuthenticated)

	useEffect(() => {
		if (isAuthenticated) {
			return
		}

		const restoreSession = async () => {
			try {
				const { data } = await refreshApi()
				setAuth(data.user, data.accessToken)
			} catch {
				logout()
			} finally {
				setIsLoading(false)
			}
		}

		restoreSession()
	}, [isAuthenticated, setAuth, logout])

	if (isLoading) {
		return (
			<div className='min-h-screen flex items-center justify-center bg-dark'>
				<div className='text-accent text-xl'>Загрузка...</div>
			</div>
		)
	}

	if (!isAuthenticated) {
		return <Navigate to='/login' replace />
	}

	return <Outlet />
}
