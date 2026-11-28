import type { DocumentType } from './types'

export const DOCUMENT_TYPE_MAP: Record<DocumentType, string> = {
	CLIENT_DOCUMENT: 'Документ клиента',
	INVESTOR_DOCUMENT: 'Документ инвестора',
	CONTRACT_SCAN: 'Скан договора',
	PAYMENT_RECEIPT: 'Чек платежа',
	PTS: 'ПТС',
	STS: 'СТС',
	INSURANCE: 'Страховка',
	INVESTMENT_CONTRACT: 'Договор инвестирования',
	DCP: 'Договор купли-продажи',
	OTHER: 'Другое',
}

/** Select options */
export const DOCUMENT_TYPE_OPTIONS = Object.entries(DOCUMENT_TYPE_MAP).map(
	([value, label]) => ({ value: value as DocumentType, label }),
)
