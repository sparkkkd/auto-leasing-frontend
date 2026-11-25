import type { BadgeVariant } from '@/components/ui'
import type { DealStatus } from './types'

interface StatusMeta {
	label: string
	variant: BadgeVariant
}

export const DEAL_STATUS_MAP: Record<DealStatus, StatusMeta> = {
	DRAFT: { label: 'Черновик', variant: 'default' },
	ACTIVE: { label: 'Активна', variant: 'info' },
	COMPLETED: { label: 'Завершена', variant: 'success' },
	CANCELLED: { label: 'Отменена', variant: 'danger' },
}

/** Select options */
export const DEAL_STATUS_OPTIONS = Object.entries(DEAL_STATUS_MAP).map(
	([value, { label }]) => ({ value: value as DealStatus, label }),
)
