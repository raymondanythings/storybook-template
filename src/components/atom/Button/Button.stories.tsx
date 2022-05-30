import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import Button from '.'

export default {
	title: 'Atoms/Button',
	component: Button,
	args: {
		children: '버튼입니다'
	}
} as ComponentMeta<typeof Button>

export const DefaultBTN: ComponentStory<typeof Button> = (args) => <Button {...args} />
