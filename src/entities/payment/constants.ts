import type { BadgeVariant } from '@/components/ui'
import type { PaymentDirection } from './types'

interface DirectionMeta {
	label: string
	shortLabel: string
	variant: BadgeVariant
}

export const PAYMENT_DIRECTION_MAP: Record<PaymentDirection, DirectionMeta> = {
	CLIENT_TO_COMPANY: {
		label: 'От клиента компании',
		shortLabel: 'Приход',
		variant: 'success',
	},
	COMPANY_TO_INVESTOR: {
		label: 'От компании инвестору',
		shortLabel: 'Расход',
		variant: 'warning',
	},
}

/** Select options */
export const PAYMENT_DIRECTION_OPTIONS = Object.entries(
	PAYMENT_DIRECTION_MAP,
).map(([value, { label }]) => ({ value: value as PaymentDirection, label }))
