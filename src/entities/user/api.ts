import api from '@/shared/api/axios'

import type { AuthResponse, LoginRequest, User } from '@/entities/user/types'
import type { PaginatedResponse } from '@/shared/types'

// Auth
export const loginApi = (data: LoginRequest) =>
	api.post<AuthResponse>('/auth/login', data)

export const logoutApi = () => api.post('/auth/logout')

export const refreshApi = () =>
	api.post<{ accessToken: string; user: User }>('/auth/refresh')

export const getMeApi = () => api.get<User>('/auth/me')

// Users
export const getUsersApi = (params?: { page?: number; limit?: number }) =>
	api.get<PaginatedResponse<User>>('/users', { params })

export const createUserApi = (data: Partial<User> & { password: string }) =>
	api.post<User>('/users', data)

export const updateUserApi = (id: string, data: Partial<User>) =>
	api.patch<User>(`/users/${id}`, data)

export const deactivateUserApi = (id: string) => api.delete(`/users/${id}`)

export const deleteUserPermanentlyApi = (id: string) =>
	api.delete(`/users/${id}/permanent`)
