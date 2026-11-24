import api from '@/shared/api/axios'

import type { PaginatedResponse } from '@/shared/types'
import type { Car } from './types'

export const getCarsApi = (params?: {
	page?: number
	limit?: number
	search?: string
	status?: string
}) => api.get<PaginatedResponse<Car>>('/cars', { params })

export const getCarByIdApi = (id: string) => api.get<Car>(`/cars/${id}`)

export const createCarApi = (data: Partial<Car>) => api.post<Car>('/cars', data)

export const updateCarApi = (id: string, data: Partial<Car>) =>
	api.patch<Car>(`/cars/${id}`, data)

export const deleteCarApi = (id: string) => api.delete(`/cars/${id}`)
