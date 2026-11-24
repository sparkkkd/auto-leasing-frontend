import api from '@/shared/api/axios'

import type { PaginatedResponse } from '@/shared/types'
import type { Investor } from './types'

export const getInvestorsApi = (params?: {
	page?: number
	limit?: number
	search?: string
	type?: string
}) => api.get<PaginatedResponse<Investor>>('/investors', { params })

export const getInvestorByIdApi = (id: string) =>
	api.get<Investor>(`/investors/${id}`)

export const createInvestorApi = (data: Partial<Investor>) =>
	api.post<Investor>('/investors', data)

export const updateInvestorApi = (id: string, data: Partial<Investor>) =>
	api.patch<Investor>(`/investors/${id}`, data)

export const deleteInvestorApi = (id: string) => api.delete(`/investors/${id}`)
