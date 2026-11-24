import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
	plugins: [react(), tailwindcss()],

	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@/components': path.resolve(__dirname, './src/components'),
			'@/pages': path.resolve(__dirname, './src/pages'),
			'@/api': path.resolve(__dirname, './src/api'),
			'@/store': path.resolve(__dirname, './src/store'),
			'@/types': path.resolve(__dirname, './src/types'),
			'@/hooks': path.resolve(__dirname, './src/hooks'),
			'@/utils': path.resolve(__dirname, './src/utils'),
			'@/features': path.resolve(__dirname, './src/features'),
			'@/entities': path.resolve(__dirname, './src/entities'),
			'@/shared': path.resolve(__dirname, './src/shared'),
			'@/widgets': path.resolve(__dirname, './src/widgets'),
		},
	},
})
