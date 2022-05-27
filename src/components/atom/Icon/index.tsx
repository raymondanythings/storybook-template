import React from 'react'
import { IconType } from 'types/commonTypes'
import { icons } from '../utils'

interface IconProps {
	type: IconType
}

const Icon: React.FC<IconProps> = ({ type }) => {
	return <i className="icon-sm" style={{ backgroundPosition: `-${icons[type]}px 0px` }} />
}

export default Icon
