import { IconType } from 'types/commonTypes'
interface IPayment {
	typed: IconType
	title: string
	id: number
	label: string
}
export const paymendData: IPayment[] = [
	{
		typed: 'card',
		title: '신용카드(일반)',
		id: 0,
		label: '신용카드'
	},
	{
		typed: 'card',
		title: '신용카드(직접입력)',
		id: 1,
		label: '신용카드'
	},
	{
		typed: 'kakao',
		title: '카카오머니 머니결재',
		id: 2,
		label: '카카오머니'
	},
	{
		typed: 'kakao',
		title: '카카오페이 신용/체크카드',
		id: 3,
		label: '카카오머니'
	},
	{
		typed: 'phone',
		title: '휴대폰 소액결제',
		id: 4,
		label: '휴대폰 소액결제'
	},
	{
		typed: 'transfer',
		title: '실시간 계좌이체',
		id: 5,
		label: '실시간 계좌이체'
	},
	{
		typed: 'virtual',
		title: '가상계좌(무통장입금)',
		id: 6,
		label: '가상계좌'
	}
]
