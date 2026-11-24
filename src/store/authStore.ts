import type { User } from '../shared/types'
import { create } from 'zustand'

interface AuthState {
	user: User | null
	accessToken: string | null
	setUser: (user: User) => void
	setAccessToken: (token: string) => void
	logout: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
	user: null,
	accessToken: null,
	setUser: (user) => set({ user }),
	setAccessToken: (accessToken) => set({ accessToken }),
	logout: () => set({ user: null, accessToken: null }),
}))
