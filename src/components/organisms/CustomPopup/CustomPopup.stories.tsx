import { ComponentStory, ComponentMeta } from '@storybook/react'
import Button from 'components/atom/Button'
import Title from 'components/atom/Title'
import { useArgs } from '@storybook/client-api'
import Component from '.'

export default {
	title: 'Organisms/CustomPopup',
	component: Component,
	args: {
		toggle: false,
		children: '테스트용 타이틀입니다'
	}
} as ComponentMeta<typeof Component>

export const CustomPopup: ComponentStory<typeof Component> = (args) => {
	const [{ toggle }, updateArgs] = useArgs()
	return (
		<Component {...args} toggle={toggle}>
			<Title>테스트용 타이틀입니다</Title>
			<Button onClick={() => updateArgs({ toggle: false })}>닫기</Button>
		</Component>
	)
}
