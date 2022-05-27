import React from 'react'
import { childrenNode } from 'types/propType'

interface TitleProps extends childrenNode {}

const Title: React.FC<TitleProps> = ({ children }) => {
	return <h3 className="text-[24px] text-greenText">{children}</h3>
}

export default Title
