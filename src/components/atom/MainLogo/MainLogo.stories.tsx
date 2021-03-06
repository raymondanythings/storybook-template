import { ComponentStory, ComponentMeta } from '@storybook/react'

import Component from '.'

export default {
	title: 'Design System/Atoms/MainLogo',
	component: Component
} as ComponentMeta<typeof Component>

export const MainLogo: ComponentStory<typeof Component> = (args) => <Component />
