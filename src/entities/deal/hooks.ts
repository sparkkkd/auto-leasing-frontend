import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import {
	createDealApi,
	deleteDealApi,
	getDealByIdApi,
	getDealsApi,
	updateDealApi,
} from './api'

import type { Deal } from './types'

export const useDeals = (params?: {
	page?: number
	limit?: number
	search?: string
	status?: string
	clientId?: string
	investorId?: string
}) => {
	return useQuery({
		queryKey: ['deals', params],
		queryFn: () => getDealsApi(params).then((res) => res.data),
	})
}

export const useDealById = (id: string) => {
	return useQuery({
		queryKey: ['deal', id],
		queryFn: () => getDealByIdApi(id).then((res) => res.data),
		enabled: !!id,
	})
}

export const useCreateDeal = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: createDealApi,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['deals'] })
			queryClient.invalidateQueries({ queryKey: ['cars'] })
		},
	})
}

export const useUpdateDeal = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: ({ id, data }: { id: string; data: Partial<Deal> }) =>
			updateDealApi(id, data),
		onSuccess: (_, { id }) => {
			queryClient.invalidateQueries({ queryKey: ['deals'] })
			queryClient.invalidateQueries({ queryKey: ['deal', id] })
			queryClient.invalidateQueries({ queryKey: ['cars'] })
		},
	})
}

export const useDeleteDeal = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: deleteDealApi,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['deals'] })
			queryClient.invalidateQueries({ queryKey: ['cars'] })
		},
	})
}
