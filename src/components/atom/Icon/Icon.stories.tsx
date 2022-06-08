import { ComponentStory, ComponentMeta } from '@storybook/react'

import Icons from '.'

export default {
	title: 'Design System/Atoms/Icons',
	component: Icons,
	args: {
		type: 'card',
		active: false
	}
} as ComponentMeta<typeof Icons>

export const DefaultIcons: ComponentStory<typeof Icons> = (args) => {
	const active = args.active
	return active ? (
		<div className="text-white w-full h-full bg-teal-500 flex flex-col justify-center items-center p-6 space-y-8 transition">
			<h1>테스트 배경색 입니다</h1>
			<Icons {...args} />
		</div>
	) : (
		<div className="w-full h-full bg-white flex flex-col justify-center items-center p-6 space-y-8 transition">
			<h1>테스트 배경색 입니다</h1>
			<Icons {...args} />
		</div>
	)
}
