import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import { deleteDocumentApi, getDocumentsApi, uploadDocumentApi } from './api'

export const useDocuments = (params?: {
	page?: number
	limit?: number
	paymentId?: string
	dealId?: string
	type?: string
}) => {
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

export const useDeleteDocument = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: deleteDocumentApi,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['documents'] })
		},
	})
}
