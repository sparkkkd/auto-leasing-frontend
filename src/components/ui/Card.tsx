import clsx from 'clsx'
import { type HTMLAttributes, forwardRef } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
	padding?: 'sm' | 'md' | 'lg' | 'none'
}

const paddingStyles: Record<string, string> = {
	sm: 'p-4',
	md: 'p-6',
	lg: 'p-8',
	none: '',
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
	({ padding = 'md', className, children, ...props }, ref) => {
		return (
			<div
				ref={ref}
				className={clsx(
					'bg-white text-dark',
					'rounded-xl shadow-lg',
					paddingStyles[padding],
					className,
				)}
				{...props}
			>
				{children}
			</div>
		)
	},
)

Card.displayName = 'Card'
