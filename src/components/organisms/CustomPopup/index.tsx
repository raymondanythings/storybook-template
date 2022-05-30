import React, { Dispatch, ReactNode, SetStateAction, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

interface PopupProps<T> {
	toggle: T
	data: any
	setToggle: Dispatch<SetStateAction<T>>
	children?: ReactNode
}

const Popup: React.FC<PopupProps<boolean>> = ({ toggle, setToggle, children, data }) => {
	const ref = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		ref.current = document.querySelector('#pop-up')
	})
	return (
		ref.current &&
		createPortal(
			toggle && (
				<>
					<div
						onClick={() => setToggle(false)}
						className="absolute top-0 left-0 h-full w-full transition bg-[rgba(0,0,0,0.68)] z-40 flex justify-center items-center px-[50px]"
					/>

					<div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-[#F6F6F6] px-[40px] py-[15px] flex flex-col items-center justify-center space-y-[15px] z-50">
						<div className="flex flex-col items-center justify-center w-full h-full space-y-[20px]">{children}</div>
					</div>
				</>
			),

			document.getElementById('pop-up') as HTMLElement
		)
	)
}

export default Popup
