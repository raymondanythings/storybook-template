import { ComponentStory, ComponentMeta } from '@storybook/react'
import Component from '.'
import { withRouter } from 'storybook-addon-react-router-v6'
import MainLogo from 'components/atom/MainLogo'

export default {
	title: 'Templates/Complete',
	component: Component,
	decorators: [
		(Story) => (
			<div className="flex justify-center pb-8 flex-col space-y-[32px] items-center">
				<MainLogo />
				<Story />
			</div>
		),
		withRouter
	],
	args: {
		charge: true
	}
} as ComponentMeta<typeof Component>

export const Complete: ComponentStory<typeof Component> = (args) => {
	return <Component {...args} />
}

Complete.story = {
	parameters: {
		reactRouter: {
			routePath: '/complete',
			state: {
				charge: true
			}
		}
	}
}
