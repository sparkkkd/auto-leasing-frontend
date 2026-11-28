import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import {
	createInvestorApi,
	deleteInvestorApi,
	getInvestorByIdApi,
	getInvestorsApi,
	updateInvestorApi,
} from './api'

import type { InvestorQueryParams, UpdateInvestorInput } from './types'

export const useInvestors = (params?: InvestorQueryParams) => {
	return useQuery({
		queryKey: ['investors', params],
		queryFn: () => getInvestorsApi(params).then((res) => res.data),
	})
}

export const useInvestorById = (id: string) => {
	return useQuery({
		queryKey: ['investor', id],
		queryFn: () => getInvestorByIdApi(id).then((res) => res.data),
		enabled: !!id,
	})
}

export const useCreateInvestor = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: createInvestorApi,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['investors'] })
		},
	})
}

export const useUpdateInvestor = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: ({ id, data }: { id: string; data: UpdateInvestorInput }) =>
			updateInvestorApi(id, data),
		onSuccess: (_, { id }) => {
			queryClient.invalidateQueries({ queryKey: ['investors'] })
			queryClient.invalidateQueries({ queryKey: ['investor', id] })
		},
	})
}

export const useDeleteInvestor = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: deleteInvestorApi,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['investors'] })
		},
	})
}
