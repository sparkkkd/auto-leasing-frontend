export type InvestorType = 'INDIVIDUAL' | 'COMPANY' | 'BANK'

export interface Investor {
	id: string
	name: string
	type: InvestorType
	contactPerson?: string
	phone?: string
	email?: string
	bankDetails?: string
	notes?: string
	createdAt: string
	updatedAt: string
}
