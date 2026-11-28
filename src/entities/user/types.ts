export type UserRole = 'ADMIN' | 'MANAGER' | 'VIEWER'

export interface User {
	id: string
	email: string
	name: string
	role: UserRole
	isActive: boolean
	createdAt: string
	updatedAt: string
}

export interface UsersListResponse {
	users: User[]
	total: number
}

export type CreateUserInput = {
	email: string
	password: string
	name: string
	role: UserRole
}

export type UpdateUserInput = {
	email?: string
	password?: string
	name?: string
	role?: UserRole
	isActive?: boolean
}

export interface AuthResponse {
	user: User
	accessToken: string
}

export interface LoginRequest {
	email: string
	password: string
}
