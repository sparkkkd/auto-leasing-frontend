import type { BadgeVariant } from '@/components/ui'
import type { CarStatus } from './types'

interface StatusMeta {
	label: string
	variant: BadgeVariant
}

export const CAR_STATUS_MAP: Record<CarStatus, StatusMeta> = {
	IN_STOCK: { label: 'В наличии', variant: 'success' },
	IN_WORK: { label: 'В работе', variant: 'info' },
	RESERVED: { label: 'Забронирован', variant: 'warning' },
	SOLD: { label: 'Продан', variant: 'default' },
	REPAIR: { label: 'В ремонте', variant: 'danger' },
}

/** Select options */
export const CAR_STATUS_OPTIONS = Object.entries(CAR_STATUS_MAP).map(
	([value, { label }]) => ({ value: value as CarStatus, label }),
)
