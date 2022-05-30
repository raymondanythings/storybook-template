import { ComponentStory, ComponentMeta } from '@storybook/react'
import Component from '.'
import { withRouter } from 'storybook-addon-react-router-v6'
export default {
	title: 'Organisms/KakaoPay',
	component: Component,
	decorators: [withRouter],
	args: {}
} as ComponentMeta<typeof Component>

export const KakaoPay: ComponentStory<typeof Component> = (args) => {
	return <Component />
}
