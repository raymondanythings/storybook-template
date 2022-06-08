import { ComponentStory, ComponentMeta } from '@storybook/react'
import Component from '.'
import { withRouter } from 'storybook-addon-react-router-v6'
import { useArgs } from '@storybook/client-api'

export default {
	title: 'Design System/Organisms/PayForm',
	component: Component,
	decorators: [withRouter]
} as ComponentMeta<typeof Component>

export const PayForm: ComponentStory<typeof Component> = (args) => {
	const [{ activeIndex }, updateArgs] = useArgs()
	console.log(activeIndex)
	return <Component {...args} activeIndex={activeIndex} setActiveIndex={(key: number) => updateArgs({ activeIndex: key })} />
}
