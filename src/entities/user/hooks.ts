import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import {
	createUserApi,
	deactivateUserApi,
	deleteUserPermanentlyApi,
	getUsersApi,
	updateUserApi,
} from './api'

import type { User } from './types'

export const useUsers = (params?: { page?: number; limit?: number }) => {
	return useQuery({
		queryKey: ['users', params],
		queryFn: () => getUsersApi(params).then((res) => res.data),
	})
}

export const useCreateUser = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: createUserApi,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['users'] })
		},
	})
}

export const useUpdateUser = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: ({ id, data }: { id: string; data: Partial<User> }) =>
			updateUserApi(id, data),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['users'] })
		},
	})
}

export const useDeactivateUser = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: deactivateUserApi,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['users'] })
		},
	})
}

export const useDeleteUserPermanently = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: deleteUserPermanentlyApi,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['users'] })
		},
	})
}
