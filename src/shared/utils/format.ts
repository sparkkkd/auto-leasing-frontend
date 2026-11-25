// Date format - (2026-11-25T10:30:00Z - DD.MM.YYYY)
export const formatDate = (
	value: string | Date | null | undefined,
	fallback = '—',
): string => {
	if (!value) return fallback

	const date = typeof value === 'string' ? new Date(value) : value
	if (Number.isNaN(date.getTime())) return fallback

	return new Intl.DateTimeFormat('ru-RU', {
		day: '2-digit',
		month: '2-digit',
		year: 'numeric',
	}).format(date)
}

// Date and time format - (2026-11-25T10:30:00Z - DD.MM.YYYY, HH:mm)
export const formatDateTime = (
	value: string | Date | null | undefined,
	fallback = '—',
): string => {
	if (!value) return fallback

	const date = typeof value === 'string' ? new Date(value) : value
	if (Number.isNaN(date.getTime())) return fallback

	return new Intl.DateTimeFormat('ru-RU', {
		day: '2-digit',
		month: '2-digit',
		year: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
	}).format(date)
}

// Currency format - (2800000 - 2 800 000 ₽)
export const formatCurrency = (
	value: number | string | null | undefined,
	options?: { withSymbol?: boolean; fractionDigits?: number },
	fallback = '—',
): string => {
	const { withSymbol = true, fractionDigits = 0 } = options ?? {}

	if (value === null || value === undefined || value === '') return fallback

	const num = typeof value === 'string' ? Number(value) : value
	if (Number.isNaN(num)) return fallback

	return new Intl.NumberFormat('ru-RU', {
		style: withSymbol ? 'currency' : 'decimal',
		currency: 'RUB',
		minimumFractionDigits: fractionDigits,
		maximumFractionDigits: fractionDigits,
	}).format(num)
}

// Format number - (1234567 - 1 234 567)
export const formatNumber = (
	value: number | string | null | undefined,
	fallback = '—',
): string => {
	if (value === null || value === undefined || value === '') return fallback

	const num = typeof value === 'string' ? Number(value) : value
	if (Number.isNaN(num)) return fallback

	return new Intl.NumberFormat('ru-RU').format(num)
}

// Format phone (+79991234567, 89991234567, 7 (999) 123-45-67 - +7 (999) 123-45-67)
export const formatPhone = (
	value: string | null | undefined,
	fallback = '—',
): string => {
	if (!value) return fallback

	const digits = value.replace(/\D/g, '')

	const normalized =
		digits.length === 11 && digits.startsWith('8')
			? `7${digits.slice(1)}`
			: digits

	if (normalized.length !== 11 || !normalized.startsWith('7')) {
		return value
	}

	return `+7 (${normalized.slice(1, 4)}) ${normalized.slice(4, 7)}-${normalized.slice(7, 9)}-${normalized.slice(9, 11)}`
}

// Format file size - (1234567 - 1.2 МБ)
export const formatFileSize = (
	bytes: number | null | undefined,
	fallback = '—',
): string => {
	if (bytes === null || bytes === undefined || bytes < 0) return fallback
	if (bytes === 0) return '0 Б'

	const units = ['Б', 'КБ', 'МБ', 'ГБ', 'ТБ']
	const index = Math.min(
		Math.floor(Math.log(bytes) / Math.log(1024)),
		units.length - 1,
	)
	const size = bytes / 1024 ** index

	return `${size.toFixed(index === 0 ? 0 : 1)} ${units[index]}`
}

// Format fullname - (lastname, firstname, middlename - Иванов Иван Иванович)
export const formatFullName = (person: {
	lastName?: string | null
	firstName?: string | null
	middleName?: string | null
}): string => {
	const parts = [person.lastName, person.firstName, person.middleName].filter(
		(part): part is string => Boolean(part?.trim()),
	)

	return parts.length > 0 ? parts.join(' ') : '—'
}

// Format short name (lastname, firstname, middlename - Иванов И. И.)
export const formatShortName = (person: {
	lastName?: string | null
	firstName?: string | null
	middleName?: string | null
}): string => {
	if (!person.lastName) return '—'

	const initials = [person.firstName, person.middleName]
		.filter((part): part is string => Boolean(part?.trim()))
		.map((part) => `${part[0].toUpperCase()}.`)
		.join(' ')

	return initials ? `${person.lastName} ${initials}` : person.lastName
}

// Format truncate - (Очень длинный текст - Очень длин…)
export const truncate = (
	value: string | null | undefined,
	maxLength: number,
	fallback = '—',
): string => {
	if (!value) return fallback
	return value.length > maxLength ? `${value.slice(0, maxLength)}…` : value
}
