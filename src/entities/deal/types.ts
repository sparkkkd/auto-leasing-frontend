import type { Car } from '@/entities/car/types'
import type { Client } from '@/entities/client/types'
import type { Investor } from '@/entities/investor/types'

export type DealStatus = 'DRAFT' | 'ACTIVE' | 'COMPLETED' | 'CANCELLED'

export interface Deal {
	id: string
	clientId: string
	carId: string
	investorId: string
	contractNumber: string
	startDate: string
	endDate: string
	clientTotalAmount: number
	investorTotalAmount: number
	status: DealStatus
	notes?: string
	createdAt: string
	updatedAt: string
}

export interface DealDetails extends Deal {
	client: Client
	investor: Investor
	car: Car
	clientRemaining: number
	investorRemaining: number
	clientPaid: number
	investorPaid: number
}
