import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import FormLabel from '.'

export default {
	title: 'Design System/Atoms/FormLabel',
	component: FormLabel,
	args: {
		children: '버튼입니다'
	}
} as ComponentMeta<typeof FormLabel>

export const DefaultLabel: ComponentStory<typeof FormLabel> = (args) => <FormLabel {...args} />
