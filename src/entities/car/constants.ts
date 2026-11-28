import type { BadgeVariant } from '@/components/ui'
import type { CarStatus } from './types'

interface StatusMeta {
	label: string
	variant: BadgeVariant
}

export const CAR_STATUS_MAP: Record<CarStatus, StatusMeta> = {
	IN_STOCK: { label: 'На складе', variant: 'success' },
	IN_WORK: { label: 'В работе', variant: 'info' },
	RESERVED: { label: 'Зарезервирована', variant: 'warning' },
	SOLD: { label: 'Продана', variant: 'default' },
	REPAIR: { label: 'На ремонте', variant: 'danger' },
	IN_PURCHASE: { label: 'В процессе покупки', variant: 'info' },
	FOR_ISSUE: { label: 'Готова к выдаче', variant: 'info' },
	SEIZED: { label: 'Изъята', variant: 'danger' },
}

/** Select options */
export const CAR_STATUS_OPTIONS = Object.entries(CAR_STATUS_MAP).map(
	([value, { label }]) => ({ value: value as CarStatus, label }),
)
