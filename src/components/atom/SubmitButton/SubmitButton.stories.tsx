import { ComponentStory, ComponentMeta } from '@storybook/react'

import Component from '.'

export default {
	title: 'Design System/Atoms/SubmitButton',
	component: Component,
	args: {
		text: '글자를입력해보세요.'
	}
} as ComponentMeta<typeof Component>

export const SubmitButton: ComponentStory<typeof Component> = (args) => <Component {...args} />
