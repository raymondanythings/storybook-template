import { ComponentStory, ComponentMeta } from '@storybook/react'

import Component from '.'

export default {
	title: 'Atoms/Title',
	component: Component,
	args: {
		children: '타이틀입니다'
	}
} as ComponentMeta<typeof Component>

export const Title: ComponentStory<typeof Component> = (args) => <Component {...args} />
