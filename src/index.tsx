import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import RootRouter from './routes/RootRouter'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<React.StrictMode>
		<RootRouter />
	</React.StrictMode>
)

reportWebVitals()
