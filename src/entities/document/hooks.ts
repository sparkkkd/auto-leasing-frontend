import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import {
	deleteDocumentApi,
	downloadDocumentApi,
	getDocumentsApi,
	getExpiringInsuranceApi,
	updateDocumentApi,
	uploadDocumentApi,
} from './api'

import type { DocumentQueryParams, UpdateDocumentInput } from './types'

export const useDocuments = (params?: DocumentQueryParams) => {
	return useQuery({
		queryKey: ['documents', params],
		queryFn: () => getDocumentsApi(params).then((res) => res.data),
	})
}

export const useUploadDocument = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: uploadDocumentApi,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['documents'] })
		},
	})
}

export const useUpdateDocument = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: ({ id, data }: { id: string; data: UpdateDocumentInput }) =>
			updateDocumentApi(id, data),
		onSuccess: (_, { id }) => {
			queryClient.invalidateQueries({ queryKey: ['documents'] })
			queryClient.invalidateQueries({ queryKey: ['document', id] })
		},
	})
}

export const useDeleteDocument = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: deleteDocumentApi,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['documents'] })
		},
	})
}

export const useDownloadDocument = () => {
	return useMutation({
		mutationFn: downloadDocumentApi,
	})
}

export const useExpiringInsurance = (days?: number) => {
	return useQuery({
		queryKey: ['expiring-insurance', days],
		queryFn: () => getExpiringInsuranceApi(days).then((res) => res.data),
		refetchInterval: 60 * 60 * 1000,
	})
}
