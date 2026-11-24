export const routes = {
	login: '/login',

	dashboard: '/dashboard',

	clients: {
		list: '/clients',
		details: (id: string) => `/clients/${id}`,
	},

	investors: {
		list: '/investors',
		details: (id: string) => `/investors/${id}`,
	},

	cars: {
		list: '/cars',
		details: (id: string) => `/cars/${id}`,
	},

	deals: {
		list: '/deals',
		details: (id: string) => `/deals/${id}`,
	},

	payments: {
		list: '/payments',
		details: (id: string) => `/payments/${id}`,
	},

	documents: {
		list: '/documents',
	},

	auditLogs: '/audit-logs',
	users: '/users',
} as const
