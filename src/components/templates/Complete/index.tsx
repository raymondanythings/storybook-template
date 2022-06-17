import SubmitButton from 'components/atom/SubmitButton'
import Title from 'components/atom/Title'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
interface CompleteProps {
	charge?: boolean
}
const Complete = ({ charge }: CompleteProps) => {
	const location = useLocation() as { state: { charge: boolean } }
	const navigation = useNavigate()
	const [ok, setOk] = useState(location?.state?.charge ?? charge)

	const handleClick = () => {
		navigation('/')
	}

	useEffect(() => {
		charge !== undefined && setOk(charge)
	}, [ok, charge])

	return (
		<>
			<Title>스터디모아 결재</Title>
			{ok ? (
				<>
					<p className="text-center">결제에 성공하였습니다.</p>
				</>
			) : (
				<>
					<p className="text-center">
						결제에 실패하였습니다.
						<br />
						다른 결제수단을 선택해주세요.
					</p>
				</>
			)}
			<SubmitButton onClick={() => handleClick()} text="닫기" />
		</>
	)
}

export default Complete
