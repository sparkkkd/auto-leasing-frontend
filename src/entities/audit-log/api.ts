import api from '@/shared/api/axios'

import type { PaginatedResponse } from '@/shared/types'
import type { AuditLog } from './types'

export const getAuditLogsApi = (params?: {
	page?: number
	limit?: number
	userId?: string
	entityType?: string
	action?: string
	dateFrom?: string
	dateTo?: string
}) => api.get<PaginatedResponse<AuditLog>>('/audit-logs', { params })
