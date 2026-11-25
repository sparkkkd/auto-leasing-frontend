import type { BadgeVariant } from '@/components/ui'
import type { InvestorType } from './types'

interface TypeMeta {
	label: string
	variant: BadgeVariant
}

export const INVESTOR_TYPE_MAP: Record<InvestorType, TypeMeta> = {
	INDIVIDUAL: { label: 'Физ. лицо', variant: 'default' },
	COMPANY: { label: 'Компания', variant: 'info' },
	BANK: { label: 'Банк', variant: 'success' },
}

/** Select options */
export const INVESTOR_TYPE_OPTIONS = Object.entries(INVESTOR_TYPE_MAP).map(
	([value, { label }]) => ({ value: value as InvestorType, label }),
)
