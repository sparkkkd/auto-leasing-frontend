import { Toaster } from 'react-hot-toast'
import { Navigate, Route, Routes } from 'react-router-dom'

import { routes } from '@/shared/routes'

import { ProtectedRoute } from '@/features/auth/ProtectedRoute'

import { LoginPage } from '@/pages/login/LoginPage'
import { TestUIPage } from '@/pages/test-ui/TestUIPage'

const DashboardPage = () => (
	<div className='p-10 text-2xl'>
		<h1>Дашборд</h1>
		<p>Вы успешно авторизованы!</p>
	</div>
)

function App() {
	return (
		<>
			<Routes>
				{/* Public routes */}
				<Route path={routes.login} element={<LoginPage />} />
				<Route path='/test-ui' element={<TestUIPage />} />

				{/* Protected routes */}
				<Route element={<ProtectedRoute />}>
					<Route path={routes.dashboard} element={<DashboardPage />} />
				</Route>

				{/* Redirect to login/dashboard */}
				<Route path='/' element={<Navigate to={routes.dashboard} replace />} />

				{/* 404 */}
				<Route
					path='*'
					element={<div className='p-10'>Страница не найдена (404)</div>}
				/>
			</Routes>

			<Toaster
				position='bottom-right'
				toastOptions={{
					duration: 3000,
					style: {
						background: '#1C1C1C',
						color: '#FFF',
						borderRadius: '8px',
						border: '1px solid #333',
					},
					success: {
						iconTheme: {
							primary: '#CDFA03',
							secondary: '#1C1C1C',
						},
					},
					error: {
						iconTheme: {
							primary: '#EF4444',
							secondary: '#FFF',
						},
					},
				}}
			/>
		</>
	)
}

export default App
