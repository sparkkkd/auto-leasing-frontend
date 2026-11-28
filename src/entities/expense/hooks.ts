import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import {
	createExpenseApi,
	deleteExpenseApi,
	getExpenseByIdApi,
	getExpensesApi,
	updateExpenseApi,
} from './api'

import type { ExpensesQueryParams, UpdateExpenseInput } from './types'

export const useExpenses = (params?: ExpensesQueryParams) => {
	return useQuery({
		queryKey: ['expenses', params],
		queryFn: () => getExpensesApi(params).then((res) => res.data),
	})
}

export const useExpenseById = (id: string) => {
	return useQuery({
		queryKey: ['expense', id],
		queryFn: () => getExpenseByIdApi(id).then((res) => res.data),
		enabled: !!id,
	})
}

export const useCreateExpense = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: createExpenseApi,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['expenses'] })
		},
	})
}

export const useUpdateExpense = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: ({ id, data }: { id: string; data: UpdateExpenseInput }) =>
			updateExpenseApi(id, data),
		onSuccess: (_, { id }) => {
			queryClient.invalidateQueries({ queryKey: ['expenses'] })
			queryClient.invalidateQueries({ queryKey: ['expense', id] })
		},
	})
}

export const useDeleteExpense = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: deleteExpenseApi,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['expenses'] })
		},
	})
}
