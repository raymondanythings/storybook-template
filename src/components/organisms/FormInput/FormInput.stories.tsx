import { ComponentStory, ComponentMeta } from '@storybook/react'
import Component from '.'

export default {
	title: 'Organisms/FormInput',
	component: Component,
	args: {
		type: 'person',
		text: '이름',
		placeholder: '이름을 입력하세요.'
	}
} as ComponentMeta<typeof Component>

export const FormInput: ComponentStory<typeof Component> = (args) => {
	return <Component {...args} />
}
