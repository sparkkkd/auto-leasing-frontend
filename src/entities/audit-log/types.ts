import type { User } from '@/entities/user/types'

export type AuditAction = 'CREATE' | 'UPDATE' | 'DELETE' | 'LOGIN' | 'LOGOUT'

export type EntityType =
	| 'USER'
	| 'CLIENT'
	| 'INVESTOR'
	| 'CAR'
	| 'DEAL'
	| 'PAYMENT'
	| 'DOCUMENT'

export interface AuditLog {
	id: string
	userId: string
	user: User
	action: AuditAction
	entityType: EntityType
	entityId: string
	changes: Record<string, unknown>
	ipAddress?: string
	userAgent?: string
	createdAt: string
}
