import api from '@/shared/api/axios'

import type { PaginatedResponse } from '@/shared/types'
import type {
	CreateInvestorInput,
	InvestorDetails,
	InvestorListItem,
	InvestorQueryParams,
	UpdateInvestorInput,
} from './types'

export const getInvestorsApi = (params?: InvestorQueryParams) =>
	api.get<PaginatedResponse<InvestorListItem>>('/investors', { params })

export const getInvestorByIdApi = (id: string) =>
	api.get<InvestorDetails>(`/investors/${id}`)

export const createInvestorApi = (data: CreateInvestorInput) =>
	api.post<InvestorDetails>('/investors', data)

export const updateInvestorApi = (id: string, data: UpdateInvestorInput) =>
	api.patch<InvestorDetails>(`/investors/${id}`, data)

export const deleteInvestorApi = (id: string) => api.delete(`/investors/${id}`)
