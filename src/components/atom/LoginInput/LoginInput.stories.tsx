import { ComponentStory, ComponentMeta } from '@storybook/react'

import LoginInput from '.'

export default {
	title: 'Atoms/LoginInput',
	component: LoginInput,
	args: {
		inputType: 'text',
		placeholder: '이름을 적어보세요.'
	}
} as ComponentMeta<typeof LoginInput>

// export const TextLoginInput: ComponentStory<typeof LoginInput> = (args) => {
// 	return <LoginInput {...args} />
// }
const Template: ComponentStory<typeof LoginInput> = (args) => <LoginInput {...args} />

export const TextType = Template.bind({})
TextType.args = {
	inputType: 'text'
}
export const NumberType = Template.bind({})
NumberType.args = {
	inputType: 'number',
	placeholder: '숫자를 입력해보세요.'
}
