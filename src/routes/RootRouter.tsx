import App from 'App'
import Complete from 'components/templates/Complete'
import Pay from 'components/templates/Pay'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import '../index.css'
import RootOutlet from './RootOutlet'
const RootRouter = () => {
	return (
		<Router>
			<div className="max-w-[400px] relative h-fit mx-auto min-h-screen py-20 px-6">
				<div id="pop-up" />
				<Routes>
					<Route path="" element={<RootOutlet />}>
						<Route path="" element={<App />} />
						<Route path="pay" element={<Pay />} />
						<Route path="complete" element={<Complete />} />
					</Route>
				</Routes>
			</div>
		</Router>
	)
}

export default RootRouter
