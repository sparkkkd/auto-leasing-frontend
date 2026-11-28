import api from '@/shared/api/axios'

import type { PaginatedResponse } from '@/shared/types'
import type {
	DocumentDetails,
	DocumentListItem,
	DocumentQueryParams,
	ExpiringInsurance,
	UpdateDocumentInput,
} from './types'

export const getDocumentsApi = (params?: DocumentQueryParams) =>
	api.get<PaginatedResponse<DocumentListItem>>('/documents', { params })

export const getDocumentByIdApi = (id: string) =>
	api.get<DocumentDetails>(`/documents/${id}`)

export const uploadDocumentApi = (data: FormData) =>
	api.post<DocumentDetails>('/documents/upload', data, {
		headers: { 'Content-Type': 'multipart/form-data' },
	})

export const updateDocumentApi = (id: string, data: UpdateDocumentInput) =>
	api.patch<DocumentDetails>(`/documents/${id}`, data)

export const deleteDocumentApi = (id: string) => api.delete(`/documents/${id}`)

export const downloadDocumentApi = (id: string) =>
	api.get(`/documents/${id}/download`, { responseType: 'blob' })

export const getExpiringInsuranceApi = (days?: number) =>
	api.get<ExpiringInsurance[]>('/documents/insurance/expiring', {
		params: days ? { days } : undefined,
	})
