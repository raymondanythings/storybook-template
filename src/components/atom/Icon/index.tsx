import React from 'react'
import { IconType } from 'types/commonTypes'
import { icons } from '../utils'

interface IconProps {
	type: IconType
	active?: boolean
}

const Icon: React.FC<IconProps> = ({ active, type }) => {
	const iconsList = ['card', 'kakao', 'mobile', 'transfer', 'virtual']
	const sizeValue = iconsList.includes(type)
	return sizeValue ? (
		active ? (
			<i className="icon-active" style={{ backgroundPosition: `-${icons[type][0]}px -${icons[type][1]}px` }} />
		) : (
			<i className="icon-sm" style={{ backgroundPosition: `-${icons[type][0]}px -${icons[type][1]}px` }} />
		)
	) : (
		<i className="icon-md" style={{ backgroundPosition: `-${icons[type][0]}px -${icons[type][1]}px` }} />
	)
}

export default Icon
