import { ComponentStory, ComponentMeta } from '@storybook/react'
import Component from '.'
import { withRouter } from 'storybook-addon-react-router-v6'
import MainLogo from 'components/atom/MainLogo'
export default {
	title: 'Templates/Pay',
	component: Component,
	decorators: [
		withRouter,
		(Story) => (
			<div className="flex justify-center pb-8 flex-col space-y-[32px] items-center">
				<MainLogo />
				<Story />
			</div>
		)
	],
	args: {}
} as ComponentMeta<typeof Component>

export const Pay: ComponentStory<typeof Component> = (args) => {
	return <Component />
}
