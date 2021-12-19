import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import '@assets/styles/index.css'
import rootReducer from './redux/rootReducer'
import { App } from './components'
import reportWebVitals from './reportWebVitals'
import { GlobalStyle } from './assets/styles/globalStyle'


const store = createStore(
  rootReducer,
  applyMiddleware(
    thunk
  )/* ,
  compose(

    // eslint-disable-next-line no-underscore-dangle

    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ) */
)

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)


reportWebVitals()
