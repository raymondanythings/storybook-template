import React from 'react'

interface SubmitButtonProps {
	text?: string
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ text }) => {
	return <button className="w-full px-[28px] py-[16px] bg-greenText rounded-[3rem] text-white ">{text}</button>
}

export default SubmitButton
