import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import {
	createClientApi,
	deleteClientApi,
	getClientByIdApi,
	getClientsApi,
	updateClientApi,
} from './api'

import type { Client } from './types'

export const useClients = (params?: {
	page?: number
	limit?: number
	search?: string
}) => {
	return useQuery({
		queryKey: ['clients', params],
		queryFn: () => getClientsApi(params).then((res) => res.data),
	})
}

export const useClientById = (id: string) => {
	return useQuery({
		queryKey: ['client', id],
		queryFn: () => getClientByIdApi(id).then((res) => res.data),
		enabled: !!id,
	})
}

export const useCreateClient = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: createClientApi,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['clients'] })
		},
	})
}

export const useUpdateClient = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: ({ id, data }: { id: string; data: Partial<Client> }) =>
			updateClientApi(id, data),
		onSuccess: (_, { id }) => {
			queryClient.invalidateQueries({ queryKey: ['clients'] })
			queryClient.invalidateQueries({ queryKey: ['client', id] })
		},
	})
}

export const useDeleteClient = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: deleteClientApi,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['clients'] })
		},
	})
}
