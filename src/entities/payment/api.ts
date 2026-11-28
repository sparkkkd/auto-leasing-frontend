import api from '@/shared/api/axios'

import type { PaginatedResponse } from '@/shared/types'
import type {
	CreatePaymentInput,
	PaymentDetails,
	PaymentQueryParams,
	PaymentsListItem,
	UpdatePaymentInput,
} from './types'

export const getPaymentsApi = (params?: PaymentQueryParams) =>
	api.get<PaginatedResponse<PaymentsListItem>>('/payments', { params })

export const getPaymentByIdApi = (id: string) =>
	api.get<PaymentDetails>(`/payments/${id}`)

export const createPaymentApi = (data: CreatePaymentInput) =>
	api.post<PaymentDetails>('/payments', data)

export const updatePaymentApi = (id: string, data: UpdatePaymentInput) =>
	api.patch<PaymentDetails>(`/payments/${id}`, data)

export const deletePaymentApi = (id: string) => api.delete(`/payments/${id}`)
