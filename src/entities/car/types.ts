import type { DealStatus } from '@/entities/deal/types'

export type CarStatus =
	| 'IN_STOCK'
	| 'IN_WORK'
	| 'RESERVED'
	| 'SOLD'
	| 'REPAIR'
	| 'IN_PURCHASE'
	| 'FOR_ISSUE'
	| 'SEIZED'

export interface CarListItem {
	id: string
	make: string
	model: string
	year: number
	color: string | null
	equipment: string | null
	licensePlate: string | null
	vin: string | null
	purchasePrice: string
	sellingPrice: string
	status: CarStatus

	client: {
		id: string
		firstName: string
		lastName: string
		middleName: string | null
	} | null

	deals: {
		id: string
		contractNumber: string
	}[]

	createdAt: string
}

export interface CarDetails {
	id: string
	make: string
	model: string
	year: number
	color: string | null
	equipment: string | null
	licensePlate: string | null
	vin: string | null
	showroom: string | null
	purchasePrice: string
	sellingPrice: string
	status: CarStatus
	comments: string | null
	notes: string[]

	deals: {
		id: string
		contractNumber: string
		startDate: string
		endDate: string
		term: number
		firstPayment: string
		monthlyPayment: string
		finalCarPrice: string
		clientTotalAmount: string
		investorTotalAmount: string
		status: DealStatus

		createdAt: string
	}[]

	clientId: string | null
	client: {
		id: string
		firstName: string
		lastName: string
		middleName: string | null
	} | null

	createdAt: string
	updatedAt: string
}

export type CreateCarInput = Omit<
	CarDetails,
	'id' | 'createdAt' | 'updatedAt' | 'client' | 'deals'
>

export type UpdateCarInput = Partial<CreateCarInput>

export interface CarQueryParams {
	page?: number
	limit?: number
	search?: string
	status?: CarStatus
}

export interface CarInsurance {
	id: string
	fileName: string
	originalName: string
	mimeType: string
	size: number
	storagePath: string
	type: string
	expiresAt: string | null
	comments: string | null
	notes: string[]
	isExpired: boolean
	isExpiringSoon: boolean
}
