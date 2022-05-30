import LoginInput, { LoginInputProps } from 'components/atom/LoginInput'
import LabelInput, { LabelInputProps } from 'components/molecules/LabelInput'
import React from 'react'

interface FormInputProps extends LabelInputProps, LoginInputProps {
	[key: string]: any
}

const FormInput: React.FC<FormInputProps> = ({ type, text, inputType, placeholder, register, ...rest }) => {
	return (
		<div className="form-wrap space-y-2">
			<LabelInput type={type} text={text} />
			<LoginInput inputType={inputType} placeholder={placeholder} register={register} {...rest} />
		</div>
	)
}

export default FormInput
