import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import {
	createPaymentApi,
	deletePaymentApi,
	getPaymentByIdApi,
	getPaymentsApi,
	updatePaymentApi,
} from './api'

import type { Payment } from './types'

export const usePayments = (params?: {
	page?: number
	limit?: number
	dealId?: string
	direction?: string
	dateFrom?: string
	dateTo?: string
}) => {
	return useQuery({
		queryKey: ['payments', params],
		queryFn: () => getPaymentsApi(params).then((res) => res.data),
	})
}

export const usePaymentById = (id: string) => {
	return useQuery({
		queryKey: ['payment', id],
		queryFn: () => getPaymentByIdApi(id).then((res) => res.data),
		enabled: !!id,
	})
}

export const useCreatePayment = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: createPaymentApi,
		onSuccess: (_, variables) => {
			queryClient.invalidateQueries({ queryKey: ['payments'] })
			if (variables.dealId) {
				queryClient.invalidateQueries({ queryKey: ['deal', variables.dealId] })
			}
		},
	})
}

export const useUpdatePayment = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: ({ id, data }: { id: string; data: Partial<Payment> }) =>
			updatePaymentApi(id, data),
		onSuccess: (_, { id }) => {
			queryClient.invalidateQueries({ queryKey: ['payments'] })
			queryClient.invalidateQueries({ queryKey: ['payment', id] })
		},
	})
}

export const useDeletePayment = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: deletePaymentApi,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['payments'] })
		},
	})
}
