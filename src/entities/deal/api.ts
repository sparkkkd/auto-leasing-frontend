import api from '@/shared/api/axios'

import type { PaginatedResponse } from '@/shared/types'
import type {
	CreateDealInput,
	DealDetails,
	DealListItem,
	DealQueryParams,
	OverduePayment,
	UpdateDealInput,
} from './types'

export const getDealsApi = (params?: DealQueryParams) =>
	api.get<PaginatedResponse<DealListItem>>('/deals', { params })

export const getDealByIdApi = (id: string) =>
	api.get<DealDetails>(`/deals/${id}`)

export const createDealApi = (data: CreateDealInput) =>
	api.post<DealDetails>('/deals', data)

export const updateDealApi = (id: string, data: UpdateDealInput) =>
	api.patch<DealDetails>(`/deals/${id}`, data)

export const deleteDealApi = (id: string) => api.delete(`/deals/${id}`)

export const getOverduePaymentsApi = () =>
	api.get<OverduePayment[]>('/deals/overdue')
