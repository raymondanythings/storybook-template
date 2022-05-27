import React from 'react'
import { childrenNode } from 'types/propType'

interface FormLabelProps extends childrenNode {}

const FormLabel: React.FC<FormLabelProps> = ({ children }) => {
	return <label className="text-label">{children}</label>
}

export default FormLabel
