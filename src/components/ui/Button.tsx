import clsx from 'clsx'
import { type ButtonHTMLAttributes, forwardRef } from 'react'

import { Spinner } from '@/components/ui/Spinner'

type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariant
	size?: ButtonSize
	isLoading?: boolean
	leftIcon?: React.ReactNode
	rightIcon?: React.ReactNode
}

const variantStyles: Record<ButtonVariant, string> = {
	primary: 'bg-accent text-dark hover:opacity-90',
	secondary: 'bg-white text-dark hover:bg-gray-200',
	danger: 'bg-error text-white hover:opacity-90',
	ghost: 'bg-transparent text-white hover:bg-white/10',
}

const sizeStyles: Record<ButtonSize, string> = {
	sm: 'px-3 py-1.5 text-sm',
	md: 'px-4 py-2 text-base',
	lg: 'px-6 py-3 text-lg',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			variant = 'primary',
			size = 'md',
			isLoading = false,
			leftIcon,
			rightIcon,
			children,
			disabled,
			className,
			...props
		},
		ref,
	) => {
		return (
			<button
				ref={ref}
				disabled={disabled || isLoading}
				className={clsx(
					'inline-flex items-center justify-center gap-2',
					'font-semibold rounded-lg cursor-pointer',
					'transition-colors duration-200',
					'disabled:opacity-50 disabled:cursor-not-allowed',
					variantStyles[variant],
					sizeStyles[size],
					className,
				)}
				{...props}
			>
				{isLoading && <Spinner size='sm' />}
				{!isLoading && leftIcon}
				{children}
				{!isLoading && rightIcon}
			</button>
		)
	},
)

Button.displayName = 'Button'
