export type DocumentType =
	| 'CLIENT_DOCUMENT'
	| 'INVESTOR_DOCUMENT'
	| 'CONTRACT_SCAN'
	| 'PAYMENT_RECEIPT'
	| 'OTHER'

export interface Document {
	id: string
	paymentId?: string
	dealId?: string
	type: DocumentType
	fileName: string
	originalName: string
	mimeType: string
	size: number
	storagePath: string
	createdAt: string
	updatedAt: string
}
