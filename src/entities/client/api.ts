import api from '@/shared/api/axios'

import type { PaginatedResponse } from '@/shared/types'
import type {
	ClientDetails,
	ClientListItem,
	ClientPaymentSchedules,
	ClientsQueryParams,
	CreateClientInput,
	UpdateClientInput,
} from './types'

export const getClientsApi = (params?: ClientsQueryParams) =>
	api.get<PaginatedResponse<ClientListItem>>('/clients', { params })

export const getClientByIdApi = (id: string) =>
	api.get<ClientDetails>(`/clients/${id}`)

export const createClientApi = (data: CreateClientInput) =>
	api.post<ClientDetails>('/clients', data)

export const updateClientApi = (id: string, data: UpdateClientInput) =>
	api.patch<ClientDetails>(`/clients/${id}`, data)

export const deleteClientApi = (id: string) => api.delete(`/clients/${id}`)

export const getClientPaymentScheduleApi = (clientId: string) =>
	api.get<ClientPaymentSchedules>(`/clients/${clientId}/payments/schedule`)
