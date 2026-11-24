import type { UserRole } from '@/shared/types'

export interface User {
	id: string
	email: string
	name: string
	role: UserRole
	isActive: boolean
	createdAt: string
	updatedAt: string
}

export interface AuthResponse {
	user: User
	accessToken: string
}

export interface LoginRequest {
	email: string
	password: string
}
