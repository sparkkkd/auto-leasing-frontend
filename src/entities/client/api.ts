import api from '@/shared/api/axios'

import type { PaginatedResponse } from '@/shared/types'
import type { Client } from './types'

export const getClientsApi = (params?: {
	page?: number
	limit?: number
	search?: string
}) => api.get<PaginatedResponse<Client>>('/clients', { params })

export const getClientByIdApi = (id: string) =>
	api.get<Client & { deals?: unknown[] }>(`/clients/${id}`) // TODO типизировать deals

export const createClientApi = (data: Partial<Client>) =>
	api.post<Client>('/clients', data)

export const updateClientApi = (id: string, data: Partial<Client>) =>
	api.patch<Client>(`/clients/${id}`, data)

export const deleteClientApi = (id: string) => api.delete(`/clients/${id}`)
