import Button from 'components/atom/Button'
import Icon from 'components/atom/Icon'
import React, { ButtonHTMLAttributes, ReactNode } from 'react'
import { IconType } from 'types/commonTypes'

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	typed: IconType
	children?: ReactNode
	active: boolean
}

const IconButton = ({ typed, children, active, ...props }: IconButtonProps) => {
	return (
		<Button active={active} {...props}>
			<Icon active={active} type={typed} />
			{children}
		</Button>
	)
}

export default IconButton
