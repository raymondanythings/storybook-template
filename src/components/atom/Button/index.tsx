import React, { ButtonHTMLAttributes } from 'react'
import { cls } from '../utils'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	active?: boolean
	size?: 'sm' | 'md' | 'full'
}

const Button = ({ active, size = 'full', ...props }: ButtonProps) => {
	const clns = cls(
		'group',
		'pay-button',
		active ? 'bg-greenText' : '',
		size === 'md' ? 'w-[300px]' : size === 'sm' ? 'w-[200px]' : 'w-full'
	)
	return <button {...props} className={clns} />
}

export default Button
