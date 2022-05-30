import { ComponentStory, ComponentMeta } from '@storybook/react'
import Component from '.'
import { withRouter } from 'storybook-addon-react-router-v6'
import MainLogo from 'components/atom/MainLogo'
export default {
	title: 'Templates/Complete',
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

export const Complete: ComponentStory<typeof Component> = (args) => {
	return <Component />
}