import React, { ButtonHTMLAttributes } from 'react'

interface SubmitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	text?: string
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ text, ...rest }) => {
	return (
		<button className="w-full keep-all px-[28px] py-[16px] bg-greenText rounded-[3rem] text-white " {...rest}>
			{text}
		</button>
	)
}

export default SubmitButton
