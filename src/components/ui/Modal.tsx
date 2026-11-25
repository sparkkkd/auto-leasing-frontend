import clsx from 'clsx'
import { type ReactNode, useEffect } from 'react'

interface ModalProps {
	isOpen: boolean
	onClose: () => void
	title?: string
	children: ReactNode
	size?: 'sm' | 'md' | 'lg' | 'xl'
}

const sizeStyles: Record<string, string> = {
	sm: 'max-w-sm',
	md: 'max-w-md',
	lg: 'max-w-lg',
	xl: 'max-w-xl',
}

export const Modal = ({
	isOpen,
	onClose,
	title,
	children,
	size = 'md',
}: ModalProps) => {
	useEffect(() => {
		if (!isOpen) return

		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === 'Escape') onClose()
		}

		document.addEventListener('keydown', handleEscape)
		document.body.style.overflow = 'hidden'

		return () => {
			document.removeEventListener('keydown', handleEscape)
			document.body.style.overflow = ''
		}
	}, [isOpen, onClose])

	if (!isOpen) return null

	return (
		<div className='fixed inset-0 z-50 flex items-center justify-center p-4'>
			<div
				className='absolute inset-0 bg-black/60 backdrop-blur-sm'
				onClick={onClose}
			/>

			<div
				className={clsx(
					'relative w-full',
					sizeStyles[size],
					'bg-white text-dark',
					'rounded-xl shadow-2xl',
					'max-h-[90vh] overflow-y-auto',
				)}
			>
				{title && (
					<div className='flex items-center justify-between px-6 py-4 border-b border-gray-200'>
						<h2 className='text-xl font-semibold'>{title}</h2>
						<button
							onClick={onClose}
							className='text-gray-500 hover:text-dark transition-colors'
						>
							✕
						</button>
					</div>
				)}
				<div className='p-6'>{children}</div>
			</div>
		</div>
	)
}
