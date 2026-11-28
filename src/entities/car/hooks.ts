import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import {
	createCarApi,
	deleteCarApi,
	getCarByIdApi,
	getCarInsuranceApi,
	getCarsApi,
	updateCarApi,
} from './api'

import type { CarQueryParams, UpdateCarInput } from './types'

export const useCars = (params?: CarQueryParams) => {
	return useQuery({
		queryKey: ['cars', params],
		queryFn: () => getCarsApi(params).then((res) => res.data),
	})
}

export const useCarById = (id: string) => {
	return useQuery({
		queryKey: ['car', id],
		queryFn: () => getCarByIdApi(id).then((res) => res.data),
		enabled: !!id,
	})
}

export const useCreateCar = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: createCarApi,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['cars'] })
		},
	})
}

export const useUpdateCar = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: ({ id, data }: { id: string; data: UpdateCarInput }) =>
			updateCarApi(id, data),
		onSuccess: (_, { id }) => {
			queryClient.invalidateQueries({ queryKey: ['cars'] })
			queryClient.invalidateQueries({ queryKey: ['car', id] })
		},
	})
}

export const useDeleteCar = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: deleteCarApi,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['cars'] })
		},
	})
}

export const useCarInsurance = (carId: string) => {
	return useQuery({
		queryKey: ['car-insurance', carId],
		queryFn: () => getCarInsuranceApi(carId).then((res) => res.data),
		enabled: !!carId,
	})
}
