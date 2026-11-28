import type { DealStatus } from '@/entities/deal/types'

export interface ClientListItem {
	id: string
	firstName: string
	lastName: string
	middleName: string | null
	phone: string

	deals: {
		id: string
		contractNumber: string
		status: DealStatus
	}[]

	cars: {
		id: string
		model: string
		make: string | null
		color: string | null
		licensePlate: string | null
		vin: string | null
		equipment: string | null
	}[]

	_count: {
		deals: number
		cars: number
	}
}

export interface ClientDetails {
	id: string
	firstName: string
	lastName: string
	middleName: string | null
	phone: string
	email: string | null
	passportData: string
	address: string
	notes: string[]
	comments: string | null

	deals: {
		id: string
		contractNumber: string
		startDate: string
		endDate: string
		createdAt: string
		status: DealStatus
	}[]

	cars: {
		id: string
		make: string
		model: string
		color: string | null
		year: number
		equipment: string | null
		licensePlate: string | null
		vin: string | null
	}[]

	_count: {
		deals: number
		cars: number
	}

	updatedAt: string
	createdAt: string
}

export type CreateClientInput = Omit<
	ClientDetails,
	'id' | 'createdAt' | 'updatedAt' | 'deals' | 'cars' | '_count'
>

export type UpdateClientInput = Partial<CreateClientInput>

export interface ClientsQueryParams {
	search?: string
	page?: number
	limit?: number
}

export interface PaymentScheduleItem {
	month: number
	dueDate: string
	status: 'paid' | 'pending' | 'overdue'
	paymentId?: string
	paidAt?: string
	amount?: number
}

export interface DealPaymentSchedule {
	dealId: string
	dealStatus: string
	clientName: string
	monthlyPayment: number
	term: number
	startDate: string
	payments: PaymentScheduleItem[]
}

export interface ClientPaymentSchedules {
	clientId: string
	clientName: string
	schedules: DealPaymentSchedule[]
}
