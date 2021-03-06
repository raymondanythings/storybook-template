import 'index.css'

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/
		}
	},
	options: {
		storySort: (a, b) => (a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }))
	}
	// layout: 'centered'
}

export const decorators = [
	(Story) => (
		<div className="max-w-[400px] relative h-fit mx-auto min-h-screen py-20 px-6">
			<div id="pop-up"></div>
			<Story />
		</div>
	)
]
