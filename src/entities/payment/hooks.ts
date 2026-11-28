import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import {
	createPaymentApi,
	deletePaymentApi,
	getPaymentByIdApi,
	getPaymentsApi,
	updatePaymentApi,
} from './api'

import type {
	CreatePaymentInput,
	PaymentQueryParams,
	UpdatePaymentInput,
} from './types'

export const usePayments = (params?: PaymentQueryParams) => {
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
		mutationFn: (data: CreatePaymentInput) => createPaymentApi(data),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['payments'] })
			queryClient.invalidateQueries({ queryKey: ['deals'] })
		},
	})
}

export const useUpdatePayment = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: ({ id, data }: { id: string; data: UpdatePaymentInput }) =>
			updatePaymentApi(id, data),
		onSuccess: (_, { id }) => {
			queryClient.invalidateQueries({ queryKey: ['payments'] })
			queryClient.invalidateQueries({ queryKey: ['payment', id] })
			queryClient.invalidateQueries({ queryKey: ['deals'] })
		},
	})
}

export const useDeletePayment = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: deletePaymentApi,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['payments'] })
			queryClient.invalidateQueries({ queryKey: ['deals'] })
		},
	})
}
