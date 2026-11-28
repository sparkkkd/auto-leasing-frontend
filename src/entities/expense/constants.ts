import type { ExpenseType } from './types'

export const EXPENSE_TYPE_MAP: Record<ExpenseType, string> = {
	CAR: 'Расходы на машину',
	RENT: 'Аренда',
	OTHER: 'Прочее',
}

/** Select options */
export const EXPENSE_TYPE_OPTIONS = Object.entries(EXPENSE_TYPE_MAP).map(
	([value, label]) => ({ value: value as ExpenseType, label }),
)
