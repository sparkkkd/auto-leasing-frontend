import type { InvestorType } from '@/entities/investor/types'

export type PaymentDirection = 'CLIENT_TO_COMPANY' | 'COMPANY_TO_INVESTOR'

export interface PaymentsListItem {
	id: string
	direction: PaymentDirection
	amount: string
	paymentDate: string
	comments: string | null

	deal: {
		id: string
		contractNumber: string
		client: {
			id: string
			firstName: string
			lastName: string
			middleName: string | null
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
			color: string | null
			year: number
			licensePlate: string | null
			vin: string | null
		}
	}

	createdAt: string
}

export interface PaymentDetails {
	id: string
	direction: PaymentDirection
	amount: string
	paymentDate: string
	comments: string | null
	notes: string[]

	deal: {
		id: string
		contractNumber: string
		comments: string | null

		client: {
			id: string
			firstName: string
			lastName: string
			middleName: string | null
			phone: string | null
			email: string | null
			comments: string | null
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
			color: string | null
			year: number
			licensePlate: string | null
			vin: string | null
			equipment: string | null
			showroom: string | null
			purchasePrice: string
			sellingPrice: string
		}
	}

	createdAt: string
	updatedAt: string
}

export type CreatePaymentInput = Omit<
	PaymentDetails,
	'id' | 'createdAt' | 'updatedAt' | 'deal'
>

export type UpdatePaymentInput = Partial<CreatePaymentInput>

export interface PaymentQueryParams {
	page?: number
	limit?: number
	dateFrom?: string
	dateTo?: string
	dealId?: string
	direction?: PaymentDirection
}
