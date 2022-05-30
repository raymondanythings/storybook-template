import Title from 'components/atom/Title'
import PayForm from 'components/organisms/PayForm'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { paymendData } from 'data/data'
import KakaoPay from 'components/organisms/KakaoPay'
const Pay = () => {
	const location = useLocation() as { state: { user: string } }
	const navigation = useNavigate()
	const [user] = useState(location?.state?.user)
	const [activeIndex, setActiveIndex] = useState<number | null>(null)

	useEffect(() => {
		if (!user) {
			navigation('/')
		}
	}, [user, navigation])
	return (
		<>
			<Title>캐시 충전</Title>
			{activeIndex !== null ? (
				<h1 className="text-center">
					{user} 님, 결재수단은 {paymendData[activeIndex].label} 입니다.
				</h1>
			) : (
				<h1>{user} 님, 결재수단을 선택해주세요.</h1>
			)}

			<PayForm activeIndex={activeIndex} setActiveIndex={setActiveIndex} />

			{activeIndex === 3 && <KakaoPay />}
		</>
	)
}

export default Pay
