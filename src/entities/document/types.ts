export type DocumentType =
	| 'CLIENT_DOCUMENT'
	| 'INVESTOR_DOCUMENT'
	| 'CONTRACT_SCAN'
	| 'PAYMENT_RECEIPT'
	| 'PTS'
	| 'STS'
	| 'INSURANCE'
	| 'INVESTMENT_CONTRACT'
	| 'DCP'
	| 'OTHER'

export interface DocumentListItem {
	id: string
	fileName: string
	originalName: string
	mimeType: string
	size: number
	storagePath: string
	type: DocumentType
	expiresAt: string | null
	comments: string | null
	notes: string[]
	carId: string | null
	clientId: string | null
	investorId: string | null
	dealId: string | null
	paymentId: string | null
	createdAt: string
	updatedAt: string
}

export type DocumentDetails = DocumentListItem

export type CreateDocumentInput = Omit<
	DocumentDetails,
	'id' | 'createdAt' | 'updatedAt'
>
export type UpdateDocumentInput = Partial<CreateDocumentInput>

export interface DocumentQueryParams {
	page?: number
	limit?: number
	type?: DocumentType
	clientId?: string
	investorId?: string
	dealId?: string
	paymentId?: string
	carId?: string
}

export interface ExpiringInsurance {
	carId: string
	carName: string
	licensePlate?: string
	insuranceId: string
	expiresAt: string
	daysUntilExpiry: number
	status: 'critical' | 'expiring' | 'expired'
}
