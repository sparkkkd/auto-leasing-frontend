import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import {
	createDealApi,
	deleteDealApi,
	getDealByIdApi,
	getDealsApi,
	getOverduePaymentsApi,
	updateDealApi,
} from './api'

import type { DealQueryParams, UpdateDealInput } from './types'

export const useDeals = (params?: DealQueryParams) => {
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
			queryClient.invalidateQueries({ queryKey: ['clients'] })
		},
	})
}

export const useUpdateDeal = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: ({ id, data }: { id: string; data: UpdateDealInput }) =>
			updateDealApi(id, data),
		onSuccess: (_, { id }) => {
			queryClient.invalidateQueries({ queryKey: ['deals'] })
			queryClient.invalidateQueries({ queryKey: ['deal', id] })
			queryClient.invalidateQueries({ queryKey: ['cars'] })
			queryClient.invalidateQueries({ queryKey: ['clients'] })
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
			queryClient.invalidateQueries({ queryKey: ['client'] })
		},
	})
}

export const useOverduePayments = () => {
	return useQuery({
		queryKey: ['overdue-payments'],
		queryFn: () => getOverduePaymentsApi().then((res) => res.data),
		refetchInterval: 10 * 60 * 1000,
	})
}
