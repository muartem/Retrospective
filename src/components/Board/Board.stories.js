import React from 'react'
import Board from './Board'
import '../../assets/styles/index.css'


export default {
  title: 'Board',
  component: Board,
  argTypes: {}
}

const Template = args => (
  <Board {...args} />
)

export const Default = Template.bind({})

Default.args = {}
