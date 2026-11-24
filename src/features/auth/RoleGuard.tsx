import { useAuth } from '@/hooks/useAuth'
import { Navigate, Outlet } from 'react-router-dom'

import type { UserRole } from '@/shared/types'

interface RoleGuardProps {
	allowedRoles: UserRole[]
}

export const RoleGuard = ({ allowedRoles }: RoleGuardProps) => {
	const { user } = useAuth()

	if (!user || !allowedRoles.includes(user.role)) {
		return <Navigate to='/dashboard' replace />
	}

	return <Outlet />
}
