import clsx from 'clsx'
import { type HTMLAttributes } from 'react'

export type BadgeVariant = 'default' | 'success' | 'warning' | 'danger' | 'info'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
	variant?: BadgeVariant
}

const variantStyles: Record<BadgeVariant, string> = {
	default: 'bg-gray-700 text-white',
	success: 'bg-success text-white',
	warning: 'bg-warning text-dark',
	danger: 'bg-error text-white',
	info: 'bg-blue-500 text-white',
}

export const Badge = ({
	variant = 'default',
	className,
	children,
	...props
}: BadgeProps) => {
	return (
		<span
			className={clsx(
				'inline-flex items-center',
				'px-2.5 py-0.5',
				'text-xs font-medium',
				'rounded-full',
				variantStyles[variant],
				className,
			)}
			{...props}
		>
			{children}
		</span>
	)
}
