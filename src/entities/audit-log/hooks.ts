import { useQuery } from '@tanstack/react-query'

import { getAuditLogsApi } from './api'

export const useAuditLogs = (params?: {
	page?: number
	limit?: number
	userId?: string
	entityType?: string
	action?: string
	dateFrom?: string
	dateTo?: string
}) => {
	return useQuery({
		queryKey: ['audit-logs', params],
		queryFn: () => getAuditLogsApi(params).then((res) => res.data),
	})
}
