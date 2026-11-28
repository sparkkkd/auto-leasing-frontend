import api from '@/shared/api/axios'

import type { PaginatedResponse } from '@/shared/types'
import type {
	CarDetails,
	CarInsurance,
	CarListItem,
	CarQueryParams,
	CreateCarInput,
	UpdateCarInput,
} from './types'

export const getCarsApi = (params?: CarQueryParams) =>
	api.get<PaginatedResponse<CarListItem>>('/cars', { params })

export const getCarByIdApi = (id: string) => api.get<CarDetails>(`/cars/${id}`)

export const createCarApi = (data: CreateCarInput) =>
	api.post<CarDetails>('/cars', data)

export const updateCarApi = (id: string, data: UpdateCarInput) =>
	api.patch<CarDetails>(`/cars/${id}`, data)

export const deleteCarApi = (id: string) => api.delete(`/cars/${id}`)

export const getCarInsuranceApi = (carId: string) =>
	api.get<CarInsurance[]>(`/cars/${carId}/insurance`)
