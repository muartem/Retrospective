import { createGlobalStyle } from 'styled-components'
import image from '../media/bg.jpg'

export const GlobalStyle = createGlobalStyle`
  body {
    background:  fixed  no-repeat url(${image}) #010a13;
    color: #FFFFFF;
  }
`
