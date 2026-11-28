import api from '@/shared/api/axios'

import type { PaginatedResponse } from '@/shared/types'
import type {
	CreateExpenseInput,
	ExpenseDetails,
	ExpenseListItem,
	ExpensesQueryParams,
	UpdateExpenseInput,
} from './types'

export const getExpensesApi = (params?: ExpensesQueryParams) =>
	api.get<PaginatedResponse<ExpenseListItem>>('/expenses', { params })

export const getExpenseByIdApi = (id: string) =>
	api.get<ExpenseDetails>(`/expenses/${id}`)

export const createExpenseApi = (data: CreateExpenseInput) =>
	api.post<ExpenseDetails>('/expenses', data)

export const updateExpenseApi = (id: string, data: UpdateExpenseInput) =>
	api.patch<ExpenseDetails>(`/expenses/${id}`, data)

export const deleteExpenseApi = (id: string) => api.delete(`/expenses/${id}`)
