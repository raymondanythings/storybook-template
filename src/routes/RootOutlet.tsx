import MainLogo from 'components/atom/MainLogo'
import React from 'react'
import { Outlet } from 'react-router-dom'

const RootOutlet = () => {
	return (
		<div className="flex justify-center pb-8 flex-col space-y-[32px] items-center">
			<MainLogo />
			<Outlet />
		</div>
	)
}

export default RootOutlet
