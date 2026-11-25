import { useState } from 'react'
import toast from 'react-hot-toast'

import { Badge, Button, Card, Input, Modal, Spinner } from '@/components/ui'

export const TestUIPage = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)

	return (
		<div className='min-h-screen bg-dark p-10 space-y-8'>
			<h1 className='text-3xl font-bold text-white'>UI Kit Test</h1>

			{/* Buttons */}
			<Card>
				<h2 className='text-xl font-semibold mb-4'>Buttons</h2>
				<div className='flex gap-3 flex-wrap'>
					<Button>Primary</Button>
					<Button variant='secondary'>Secondary</Button>
					<Button variant='danger'>Danger</Button>
					<Button variant='ghost'>Ghost</Button>
					<Button isLoading>Loading</Button>
					<Button disabled>Disabled</Button>
					<Button size='sm'>Small</Button>
					<Button size='lg'>Large</Button>
				</div>
			</Card>

			{/* Inputs */}
			<Card>
				<h2 className='text-xl font-semibold mb-4'>Inputs</h2>
				<div className='space-y-4 max-w-md'>
					<Input label='Email' placeholder='test@example.com' />
					<Input label='Password' type='password' placeholder='••••••••' />
					<Input label='With error' error='Это поле обязательно' />
				</div>
			</Card>

			{/* Badges */}
			<Card>
				<h2 className='text-xl font-semibold mb-4'>Badges</h2>
				<div className='flex gap-2 flex-wrap'>
					<Badge>Default</Badge>
					<Badge variant='success'>Success</Badge>
					<Badge variant='warning'>Warning</Badge>
					<Badge variant='danger'>Danger</Badge>
					<Badge variant='info'>Info</Badge>
				</div>
			</Card>

			{/* Spinner */}
			<Card>
				<h2 className='text-xl font-semibold mb-4'>Spinners</h2>
				<div className='flex gap-4 items-center'>
					<Spinner size='sm' />
					<Spinner size='md' />
					<Spinner size='lg' />
				</div>
			</Card>

			{/* Modal */}
			<Card>
				<h2 className='text-xl font-semibold mb-4'>Modal</h2>
				<Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
				<Modal
					isOpen={isModalOpen}
					onClose={() => setIsModalOpen(false)}
					title='Тестовая модалка'
				>
					<p className='text-gray-700'>Это содержимое модального окна.</p>
					<div className='flex justify-end gap-2 mt-4'>
						<Button variant='secondary' onClick={() => setIsModalOpen(false)}>
							Отмена
						</Button>
						<Button onClick={() => setIsModalOpen(false)}>Подтвердить</Button>
					</div>
				</Modal>
			</Card>

			{/* Toast */}
			<Card>
				<h2 className='text-xl font-semibold mb-4'>Toasts</h2>
				<div className='flex gap-2'>
					<Button onClick={() => toast.success('Успешно!')}>Success</Button>

					<Button onClick={() => toast.error('Ошибка!')}>Error</Button>

					<Button onClick={() => toast('Обычное уведомление')}>Info</Button>
				</div>
			</Card>
		</div>
	)
}
