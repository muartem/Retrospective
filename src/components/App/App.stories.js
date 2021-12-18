import React from 'react'
import App from './App'
import '../../assets/styles/index.css'
import { GlobalStyle } from '../../assets/styles/globalStyle'


export default {
  title: 'App',
  component: App,
  argTypes: {}
}

const Template = args => (
  <>
    <GlobalStyle />
    <App {...args} />
  </>
)

export const Default = Template.bind({})

Default.args = {}
