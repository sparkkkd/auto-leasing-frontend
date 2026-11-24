import api from '@/shared/api/axios'

import type { PaginatedResponse } from '@/shared/types'
import type { Document } from './types'

export const getDocumentsApi = (params?: {
	page?: number
	limit?: number
	paymentId?: string
	dealId?: string
	type?: string
}) => api.get<PaginatedResponse<Document>>('/documents', { params })

export const getDocumentByIdApi = (id: string) =>
	api.get<Document>(`/documents/${id}`)

export const uploadDocumentApi = (formData: FormData) =>
	api.post<Document>('/documents/upload', formData, {
		headers: { 'Content-Type': 'multipart/form-data' },
	})

export const deleteDocumentApi = (id: string) => api.delete(`/documents/${id}`)

export const downloadDocumentApi = (id: string) =>
	api.get(`/documents/${id}/download`, { responseType: 'blob' })
