import { useForm } from 'react-hook-form'
import FormInput from '../FormInput'
import SubmitButton from 'components/atom/SubmitButton'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Popup from '../CustomPopup'
interface KakaoFormData {
	cash: number
}

const KakaoPay = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<KakaoFormData>()
	const navigation = useNavigate()
	const [toggle, setToggle] = useState(false)
	const [data, setData] = useState(0)
	const onValid = (data: KakaoFormData) => {
		const cash = data.cash
		setData(cash)
		setToggle(true)
	}

	return (
		<>
			<hr className="w-full border-gray-300" />
			<Popup data={data} toggle={toggle} setToggle={setToggle}>
				충전금액 : {data}
				<div className="flex space-x-2 mt-4">
					<SubmitButton
						text="실패"
						onClick={() => {
							setToggle(false)
							navigation('/complete', { state: { charge: false } })
						}}
					/>
					<SubmitButton
						onClick={(event) => {
							setToggle(false)
							navigation('/complete', { state: { charge: true } })
						}}
						text="성공"
					/>
				</div>
			</Popup>
			<div className="px-10">
				<div className="text-center">카카오페이 결제수단을 카카오머니로 선택해주세요.</div>
				<form onSubmit={handleSubmit(onValid)}>
					<FormInput
						type="cash"
						text="캐시"
						inputType="number"
						placeholder="충전금액을 입력하세요."
						register={register('cash', {
							required: '필수입력항목 입니다.'
						})}
					/>
					{errors.cash && <span className="text-red-400">{errors.cash.message}</span>}
					<div className="flex space-x-2 mt-4">
						<SubmitButton
							text="취소"
							onClick={(event) => {
								event.preventDefault()
								navigation('/', { state: null })
							}}
						/>
						<SubmitButton text="충전" />
					</div>
				</form>
			</div>
		</>
	)
}

export default KakaoPay
