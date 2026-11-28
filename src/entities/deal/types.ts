import type { InvestorType } from '@/entities/investor/types'

export type DealStatus =
	| 'DRAFT'
	| 'ACTIVE'
	| 'COMPLETED'
	| 'CANCELLED'
	| 'TERMINATED'

export interface DealListItem {
	id: string
	contractNumber: string
	startDate: string
	endDate: string
	term: number
	monthlyPayment: string
	finalCarPrice: string
	clientTotalAmount: string
	investorTotalAmount: string
	status: DealStatus
	createdAt: string

	client: {
		id: string
		firstName: string
		lastName: string
		phone: string
	}

	investor: {
		id: string
		name: string
		type: InvestorType
	}

	car: {
		id: string
		make: string
		model: string
		year: number
		vin: string | null
		licensePlate: string | null
	}

	_count: {
		payments: number
	}
}

export interface DealDetails {
	id: string
	contractNumber: string
	startDate: string
	endDate: string
	term: number

	firstPayment: string
	monthlyPayment: string
	finalCarPrice: string
	clientTotalAmount: number
	investorTotalAmount: number

	status: DealStatus
	comments: string | null
	notes: string[]

	contractScanId: string | null
	investorContractScanId: string | null

	client: {
		id: string
		firstName: string
		lastName: string
		middleName: string | null
		phone: string
		passportData: string
		address: string
		comments: string | null
	}

	car: {
		id: string
		make: string
		model: string
		year: number
		vin: string | null
		licensePlate: string | null
		color: string | null
		equipment: string | null
		showroom: string | null
		purchasePrice: string
		sellingPrice: string
	}

	investor: {
		id: string
		name: string
		type: InvestorType
		contactPerson: string | null
		phone: string | null
		bankDetails: string | null
		comments: string | null
	}

	payments: {
		id: string
		direction: string
		amount: string
		paymentDate: string
		comments: string | null
	}[]

	clientRemaining: number
	investorRemaining: number
	clientPaid: number
	investorPaid: number

	createdAt: string
	updatedAt: string
}

export type CreateDealInput = Omit<
	DealDetails,
	| 'id'
	| 'createdAt'
	| 'updatedAt'
	| 'client'
	| 'car'
	| 'investor'
	| 'payments'
	| 'clientRemaining'
	| 'investorRemaining'
	| 'clientPaid'
	| 'investorPaid'
>

export type UpdateDealInput = Partial<CreateDealInput>

export interface DealQueryParams {
	page?: number
	limit?: number
	search?: string
	status?: DealStatus
	clientId?: string
	investorId?: string
}

export interface OverduePayment {
	dealId: string
	clientId: string
	clientName: string
	nextPaymentDate: string
	monthlyPayment: number
	status: 'warning' | 'critical' | 'overdue'
	daysUntilDue: number
	currentMonth: number
}
