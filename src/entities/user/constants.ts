import type { BadgeVariant } from '@/components/ui'
import type { UserRole } from '@/shared/types'

interface RoleMeta {
	label: string
	variant: BadgeVariant
}

export const USER_ROLE_MAP: Record<UserRole, RoleMeta> = {
	ADMIN: { label: 'Администратор', variant: 'danger' },
	MANAGER: { label: 'Менеджер', variant: 'info' },
	VIEWER: { label: 'Наблюдатель', variant: 'default' },
}

/** Select options */
export const USER_ROLE_OPTIONS = Object.entries(USER_ROLE_MAP).map(
	([value, { label }]) => ({ value: value as UserRole, label }),
)
