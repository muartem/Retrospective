import React from 'react'
import Column from './Column'
import '../../assets/styles/index.css'


export default {
	title: 'Column',
	component: Column,
	argTypes: {}
}

const Template = args => (
	<Column {...args} />
)

export const Default = Template.bind({})

Default.args = {
	title: 'Title',
	items: [{
		'title': 'task5',
		'date': '2011-01-26',
		'ratio': -5,
		'category': 'Hold'
	},
		{
			'title': 'task6',
			'date': '2013-01-26',
			'ratio': 17,
			'category': 'Done'
		},
		{
			'title': 'task7',
			'date': '2014-01-26',
			'ratio': 0,
			'category': 'Done'
		}
	],
	editRatio: () => null,
	editTask: () => null,
	deleteTask: () => null,
	addNewTask: () => null,
	editCategory: () => null,
	changeCategory: () => null
}
