import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'

import { loginApi } from '@/entities/user/api'
import { useAuth } from '@/hooks/useAuth'
import { getApiErrorMessage } from '@/shared/api/api-error'
import { routes } from '@/shared/routes'
import toast from 'react-hot-toast'

const loginSchema = z.object({
	email: z.string().email('Введите корректный email'),
	password: z.string().min(6, 'Минимум 6 символов'),
})

type LoginFormData = z.infer<typeof loginSchema>

export const LoginPage = () => {
	const navigate = useNavigate()
	const { setAuth } = useAuth()

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<LoginFormData>({
		resolver: zodResolver(loginSchema),
	})

	const loginMutation = useMutation({
		mutationFn: loginApi,
		onSuccess: (response) => {
			const { user, accessToken } = response.data
			setAuth(user, accessToken)
			navigate(routes.dashboard)
		},
		onError: (error: unknown) => {
			console.error('Login failed:', getApiErrorMessage(error))
		},
	})

	const onSubmit = (data: LoginFormData) => {
		toast.promise(
			loginMutation.mutateAsync(data),
			{
				loading: 'Входим в систему...',
				success: 'Добро пожаловать!',
				error: getApiErrorMessage,
			},
			{ position: 'top-center' },
		)
	}

	return (
		<div className='min-h-screen flex items-center justify-center bg-dark text-white'>
			<div className='w-full max-w-md p-8 bg-[#2A2A2A] rounded-xl shadow-lg'>
				<h1 className='text-2xl font-bold mb-6 text-center text-accent'>
					Auto Leasing Login
				</h1>

				<form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
					<div>
						<label className='block text-sm mb-1'>Email</label>
						<input
							{...register('email')}
							type='email'
							className='w-full p-2 rounded bg-dark border border-gray-700 focus:border-accent outline-none'
							placeholder='admin@example.com'
						/>
						{errors.email && (
							<p className='text-error text-sm mt-1'>{errors.email.message}</p>
						)}
					</div>

					<div>
						<label className='block text-sm mb-1'>Пароль</label>
						<input
							{...register('password')}
							type='password'
							className='w-full p-2 rounded bg-dark border border-gray-700 focus:border-accent outline-none'
							placeholder='admin123'
						/>
						{errors.password && (
							<p className='text-error text-sm mt-1'>
								{errors.password.message}
							</p>
						)}
					</div>

					<button
						type='submit'
						disabled={isSubmitting}
						className='w-full py-2 bg-accent text-dark font-bold rounded hover:opacity-90 disabled:opacity-50 transition'
					>
						{isSubmitting ? 'Вход...' : 'Войти'}
					</button>
				</form>
			</div>
		</div>
	)
}
