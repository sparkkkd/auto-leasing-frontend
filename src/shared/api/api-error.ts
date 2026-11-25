import type { ApiError } from '@/shared/types'
import { AxiosError } from 'axios'

const DEFAULT_MESSAGE = 'Произошла ошибка. Попробуйте позже'

const STATUS_MESSAGES: Record<number, string> = {
	400: 'Некорректный запрос',
	401: 'Требуется авторизация',
	403: 'Недостаточно прав для выполнения операции',
	404: 'Запись не найдена',
	409: 'Конфликт данных. Возможно, запись уже существует',
	413: 'Файл слишком большой',
	422: 'Ошибка валидации данных',
	429: 'Слишком много запросов. Подождите немного',
	500: 'Ошибка сервера. Попробуйте позже',
}

export const getApiErrorMessage = (error: unknown): string => {
	if (error instanceof AxiosError) {
		if (!error.response) {
			if (error.code === 'ECONNABORTED') {
				return 'Превышено время ожидания. Проверьте соединение'
			}
			return 'Не удалось связаться с сервером. Проверьте соединение'
		}

		const data = error.response.data as ApiError | undefined
		const message = data?.message

		if (Array.isArray(message)) {
			return message[0] ?? DEFAULT_MESSAGE
		}

		if (typeof message === 'string' && message.trim()) {
			return message
		}

		return STATUS_MESSAGES[error.response.status] ?? DEFAULT_MESSAGE
	}

	if (error instanceof Error && error.message) {
		return error.message
	}

	return DEFAULT_MESSAGE
}

export const getApiErrorStatus = (error: unknown): number | undefined =>
	error instanceof AxiosError ? error.response?.status : undefined

export const getApiValidationErrors = (error: unknown): string[] => {
	if (!(error instanceof AxiosError)) return []

	const data = error.response?.data as ApiError | undefined
	const message = data?.message

	if (Array.isArray(message)) return message
	return typeof message === 'string' ? [message] : []
}
