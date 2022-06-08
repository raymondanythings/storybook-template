import SubmitButton from 'components/atom/SubmitButton'
import Title from 'components/atom/Title'
import FormInput from 'components/organisms/FormInput'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

export interface ILoginFormData {
	phone: number
	username: string
}

const userData = {
	phone: '01093367663',
	username: '엽용현'
}

const LoginForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<ILoginFormData>({ mode: 'onBlur', reValidateMode: 'onBlur' })
	const [notValid, setNotValid] = useState('')
	const navigation = useNavigate()

	const onValid = (data: ILoginFormData) => {
		const { phone, username } = data
		if (phone + '' === userData.phone && username === userData.username) {
			navigation('/pay', { state: { user: username } })
		} else {
			setNotValid('유저가 존재하지 않습니다.')
		}
	}
	return (
		<form className="flex flex-col space-y-8" onSubmit={handleSubmit(onValid)}>
			<Title>스터디모아 캐시 충전</Title>
			<FormInput
				type="phone"
				text="연락처"
				inputType="number"
				placeholder="숫자만 입력하세요."
				register={register('phone', {
					required: '필수입력항목 입니다.',
					pattern: {
						value: /^01([0|1|6|7|8|9])?([0-9]{3,4})?([0-9]{4})$/,
						message: '올바른 전화번호를 입력하세요.'
					}
				})}
			/>
			{errors.phone && <span className="text-red-400">{errors.phone.message}</span>}
			<FormInput
				type="person"
				text="이름"
				placeholder="성함을 입력해주세요"
				register={register('username', { required: '필수입력항목 입니다.' })}
			/>
			{errors.username && <span className="text-red-400">{errors.username.message}</span>}
			<SubmitButton text="인증" />
			{notValid !== '' && <span className="text-red-400">{notValid}</span>}
		</form>
	)
}

export default LoginForm
