import Icon from 'components/atom/Icon'
import React from 'react'
import { IconType } from 'types/commonTypes'

export interface LabelInputProps {
	type: IconType
	text?: string
}

const LabelInput: React.FC<LabelInputProps> = ({ type, text }) => {
	return (
		<label className="text-label">
			<Icon type={type} /> {text}
		</label>
	)
}

export default LabelInput
