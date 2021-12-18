import React from 'react'
import Task from './Task'


export default {
	title: 'Task',
	component: Task,
	argTypes: {}
}

const Template = args => (
	<div style={{ maxWidth: 250 }}>
		<Task {...args} />
	</div>
)

export const Default = Template.bind({})

Default.args = {
	title: 'task1',
	ratio: 1,
	date: Date.now(),
	board: 'To do',
	editRatio: () => null,
	editTask: () => null,
	deleteTask: () => null,
	getDropId: () => null
}
