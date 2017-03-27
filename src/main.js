// @flow
import React from 'react'
import ReactDOM from 'react-dom'
import createStore from './store/createStore'
import { AppContainer as HotContainer } from 'react-hot-loader'
import AppContainer from './containers/AppContainer'
import 'isomorphic-fetch'

// ========================================================
// Store Instantiation
// ========================================================
const initialState = window.___INITIAL_STATE__
const store = createStore(initialState)

// ========================================================
// Render Setup
// ========================================================
const MOUNT_NODE = document.getElementById('root')

let render = (Component = AppContainer) => {
  ReactDOM.render(
    <HotContainer>
      <Component {...{ store }} />
    </HotContainer>,
    MOUNT_NODE
  )
}

// This code is excluded from production bundle
if (__DEV__ && module.hot) {
  // Development render functions
  const renderApp = render
  const renderError = (error) => {
    const RedBox = require('redbox-react').default

    ReactDOM.render(<RedBox error={error} />, MOUNT_NODE)
  }

  // Wrap render in try/catch
  render = (AppContainer) => {
    try {
      renderApp()
    } catch (error) {
      console.error(error)
      renderError(error)
    }
  }

  // Setup hot module replacement
  module.hot.accept('./containers/AppContainer', () => {
    render(AppContainer)
  })
}

// ========================================================
// Go!
// ========================================================
render(AppContainer)
