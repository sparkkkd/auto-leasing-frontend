import clsx from 'clsx'
import { type InputHTMLAttributes, forwardRef } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string
	error?: string
	leftIcon?: React.ReactNode
	rightIcon?: React.ReactNode
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ label, error, leftIcon, rightIcon, className, id, ...props }, ref) => {
		const inputId = id || `input-${Math.random().toString(36).slice(2, 9)}`

		return (
			<div className='w-full'>
				{label && (
					<label
						htmlFor={inputId}
						className='block text-sm font-medium text-white mb-1'
					>
						{label}
					</label>
				)}
				<div className='relative'>
					{leftIcon && (
						<div className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'>
							{leftIcon}
						</div>
					)}
					<input
						ref={ref}
						id={inputId}
						className={clsx(
							'w-full px-4 py-2',
							'bg-dark text-white',
							'border rounded-lg',
							'placeholder:text-gray-500',
							'focus:outline-none focus:border-accent',
							'transition-colors duration-200',
							leftIcon && 'pl-10',
							rightIcon && 'pr-10',
							error ? 'border-error' : 'border-gray-700',
							className,
						)}
						{...props}
					/>
					{rightIcon && (
						<div className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400'>
							{rightIcon}
						</div>
					)}
				</div>
				{error && <p className='mt-1 text-sm text-error'>{error}</p>}
			</div>
		)
	},
)

Input.displayName = 'Input'
