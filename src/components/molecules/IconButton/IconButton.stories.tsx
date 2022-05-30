import { ComponentStory, ComponentMeta } from '@storybook/react'

import Component from '.'

export default {
	title: 'Molecules/IconButton',
	component: Component,
	args: {
		typed: 'card',
		children: '카드'
	}
} as ComponentMeta<typeof Component>

export const IconButton: ComponentStory<typeof Component> = (args) => <Component {...args} />
