import React from 'react'
import Header from './Header'


export default {
  title: 'Header',
  component: Header,
  argTypes: {}
}

const Template = args => (
  <Header {...args} />
)

export const Default = Template.bind({})

Default.args = {}
