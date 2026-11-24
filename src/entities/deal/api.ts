import api from '@/shared/api/axios'

import type { PaginatedResponse } from '@/shared/types'
import type { Deal, DealDetails } from './types'

export const getDealsApi = (params?: {
	page?: number
	limit?: number
	search?: string
	status?: string
	clientId?: string
	investorId?: string
}) => api.get<PaginatedResponse<Deal>>('/deals', { params })

export const getDealByIdApi = (id: string) =>
	api.get<DealDetails>(`/deals/${id}`)

export const createDealApi = (data: Partial<Deal>) =>
	api.post<Deal>('/deals', data)

export const updateDealApi = (id: string, data: Partial<Deal>) =>
	api.patch<Deal>(`/deals/${id}`, data)

export const deleteDealApi = (id: string) => api.delete(`/deals/${id}`)
