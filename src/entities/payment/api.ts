import api from '@/shared/api/axios'

import type { PaginatedResponse } from '@/shared/types'
import type { Payment } from './types'

export const getPaymentsApi = (params?: {
	page?: number
	limit?: number
	dealId?: string
	direction?: string
	dateFrom?: string
	dateTo?: string
}) => api.get<PaginatedResponse<Payment>>('/payments', { params })

export const getPaymentByIdApi = (id: string) =>
	api.get<Payment>(`/payments/${id}`)

export const createPaymentApi = (data: Partial<Payment>) =>
	api.post<Payment>('/payments', data)

export const updatePaymentApi = (id: string, data: Partial<Payment>) =>
	api.patch<Payment>(`/payments/${id}`, data)

export const deletePaymentApi = (id: string) => api.delete(`/payments/${id}`)
