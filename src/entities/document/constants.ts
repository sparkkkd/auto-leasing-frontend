import type { BadgeVariant } from '@/components/ui'
import type { DocumentType } from './types'

interface TypeMeta {
	label: string
	variant: BadgeVariant
}

export const DOCUMENT_TYPE_MAP: Record<DocumentType, TypeMeta> = {
	CLIENT_DOCUMENT: { label: 'Документ клиента', variant: 'default' },
	INVESTOR_DOCUMENT: { label: 'Документ инвестора', variant: 'default' },
	CONTRACT_SCAN: { label: 'Скан договора', variant: 'info' },
	PAYMENT_RECEIPT: { label: 'Квитанция', variant: 'success' },
	OTHER: { label: 'Прочее', variant: 'default' },
}

/** Select options */
export const DOCUMENT_TYPE_OPTIONS = Object.entries(DOCUMENT_TYPE_MAP).map(
	([value, { label }]) => ({ value: value as DocumentType, label }),
)

export const ALLOWED_DOCUMENT_MIME_TYPES = [
	'application/pdf',
	'image/jpeg',
	'image/png',
	'image/webp',
] as const

export const MAX_DOCUMENT_SIZE_BYTES = 10 * 1024 * 1024 // 10 МБ
