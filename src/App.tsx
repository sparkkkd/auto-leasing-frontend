import { ProtectedRoute } from '@/features/auth/ProtectedRoute'
import { LoginPage } from '@/pages/login/LoginPage'
import { routes } from '@/shared/routes'
import { Navigate, Route, Routes } from 'react-router-dom'

const DashboardPage = () => (
	<div className='p-10 text-2xl'>
		<h1>Дашборд</h1>
		<p>Вы успешно авторизованы!</p>
	</div>
)

function App() {
	return (
		<Routes>
			{/* Public routes */}
			<Route path={routes.login} element={<LoginPage />} />

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
	)
}

export default App
