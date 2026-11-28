import type { DealStatus } from '@/entities/deal/types'

export type InvestorType = 'INDIVIDUAL' | 'COMPANY' | 'BANK'

export interface InvestorListItem {
	id: string
	name: string
	type: InvestorType
	contactPerson: string | null
	phone: string | null
	bankDetails: string | null
	comments: string | null

	_count: {
		deals: number
	}

	createdAt: string
}

export interface InvestorDetails {
	id: string
	name: string
	type: string
	contactPerson: string | null
	phone: string | null
	email: string | null
	bankDetails: string | null
	comments: string | null
	notes: string[]

	deals: {
		id: string
		contractNumber: string
		status: DealStatus
	}[]

	_count: {
		deals: number
	}

	createdAt: string
	updatedAt: string
}

export type CreateInvestorInput = Omit<
	InvestorDetails,
	'id' | 'createdAt' | 'updatedAt' | 'deals' | '_count'
>

export type UpdateInvestorInput = Partial<CreateInvestorInput>

export interface InvestorQueryParams {
	page?: number
	limit?: number
	search?: string
	type?: InvestorType
}
