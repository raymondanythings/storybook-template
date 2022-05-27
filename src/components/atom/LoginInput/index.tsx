import React, { HTMLInputTypeAttribute } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

export interface LoginInputProps {
	placeholder?: string
	inputType?: HTMLInputTypeAttribute
	register: UseFormRegisterReturn
}

const LoginInput: React.FC<LoginInputProps> = ({ placeholder, inputType = 'text', register, ...rest }) => {
	return <input type={inputType} placeholder={placeholder} className="form-input" {...register} {...rest} />
}

export default LoginInput
