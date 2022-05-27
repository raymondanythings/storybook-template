import App from 'App'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import '../index.css'
import RootOutlet from './RootOutlet'
const RootRouter = () => {
	return (
		<Router>
			<div className="max-w-[400px] mx-auto h-screen py-20 px-6">
				<Routes>
					<Route path="" element={<RootOutlet />}>
						<Route path="" element={<App />} />
						<Route path="pay" element={<>확인요 </>} />
					</Route>
				</Routes>
			</div>
		</Router>
	)
}

export default RootRouter
