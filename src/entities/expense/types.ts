import type { CarStatus } from '@/entities/car/types'
import type { UserRole } from '@/entities/user/types'

export type ExpenseType = 'CAR' | 'RENT' | 'OTHER'

export interface ExpenseListItem {
	id: string
	type: ExpenseType
	amount: string
	comments: string | null
	notes: string[]

	car: {
		id: string
		make: string
		model: string
		year: number
		vin: string | null
		licensePlate: string | null
		color: string | null
		status: CarStatus
	} | null

	author: {
		id: string
		name: string
		role: UserRole
	}

	createdAt: Date
	updatedAt: Date
}

export type ExpenseDetails = ExpenseListItem

export type CreateExpenseInput = Omit<
	ExpenseDetails,
	'id' | 'createdAt' | 'updatedAt' | 'car' | 'author'
>

export type UpdateExpenseInput = Partial<CreateExpenseInput>

export interface ExpensesQueryParams {
	page?: number
	limit?: number
	carId?: string
	type?: ExpenseType
}
