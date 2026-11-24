export type PaymentDirection = 'CLIENT_TO_COMPANY' | 'COMPANY_TO_INVESTOR'

export interface Payment {
	id: string
	dealId: string
	direction: PaymentDirection
	amount: number
	paidAt: string
	comment?: string
	createdAt: string
	updatedAt: string
}
