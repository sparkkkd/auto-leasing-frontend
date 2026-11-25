import type { BadgeVariant } from '@/components/ui'
import type { AuditAction, EntityType } from './types'

interface Meta {
	label: string
	variant: BadgeVariant
}

export const AUDIT_ACTION_MAP: Record<AuditAction, Meta> = {
	CREATE: { label: 'Создание', variant: 'success' },
	UPDATE: { label: 'Изменение', variant: 'info' },
	DELETE: { label: 'Удаление', variant: 'danger' },
	LOGIN: { label: 'Вход', variant: 'default' },
	LOGOUT: { label: 'Выход', variant: 'default' },
}

export const ENTITY_TYPE_MAP: Record<EntityType, string> = {
	USER: 'Пользователь',
	CLIENT: 'Клиент',
	INVESTOR: 'Инвестор',
	CAR: 'Автомобиль',
	DEAL: 'Сделка',
	PAYMENT: 'Платёж',
	DOCUMENT: 'Документ',
}

export const AUDIT_ACTION_OPTIONS = Object.entries(AUDIT_ACTION_MAP).map(
	([value, { label }]) => ({ value: value as AuditAction, label }),
)

/** Select options */
export const ENTITY_TYPE_OPTIONS = Object.entries(ENTITY_TYPE_MAP).map(
	([value, label]) => ({ value: value as EntityType, label }),
)
