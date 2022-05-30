import IconButton from 'components/molecules/IconButton'
import React, { Dispatch } from 'react'
import { SetStateAction } from 'react'
import { paymendData } from 'data/data'

interface PayFormProps {
	activeIndex: number | null
	setActiveIndex: Dispatch<SetStateAction<number | null>> | ((data: any) => void)
}

const PayForm = ({ activeIndex, setActiveIndex }: PayFormProps) => {
	return (
		<div className="space-y-2">
			{paymendData.map((data) => (
				<IconButton key={data.id} onClick={() => setActiveIndex(data.id)} typed={data.typed} active={activeIndex === data.id}>
					{data.title}
				</IconButton>
			))}
		</div>
	)
}

export default PayForm
