export type CarStatus = 'IN_STOCK' | 'IN_WORK' | 'RESERVED' | 'SOLD' | 'REPAIR'

export interface Car {
	id: string
	make: string
	model: string
	year: number
	vin: string
	licensePlate?: string
	color?: string
	status: CarStatus
	purchasePrice: number
	sellingPrice: number
	createdAt: string
	updatedAt: string
}
