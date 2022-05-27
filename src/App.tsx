import MainLogo from 'components/atom/MainLogo'
import LoginForm from 'components/templates/LoginForm'

import React from 'react'

function App() {
	return (
		<div className="flex justify-center flex-col space-y-[32px] items-center">
			<MainLogo />
			<LoginForm />
		</div>
	)
}

export default App
