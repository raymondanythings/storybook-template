import { ComponentStory, ComponentMeta } from '@storybook/react'

import Component from '.'

export default {
	title: 'Design System/Molecules/LabelInput',
	component: Component,
	args: {
		type: 'card',
		text: '글자입니다.'
	}
} as ComponentMeta<typeof Component>

export const LabelInput: ComponentStory<typeof Component> = (args) => <Component {...args} />
