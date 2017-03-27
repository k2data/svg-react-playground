import React from 'react'
import { injectReducer } from '../store/reducers'

export default function asyncRoute (getComponent, store) {
  return class AsyncComponent extends React.Component {
    static Component = null;
    mounted = false;

    state = {
      Component: AsyncComponent.Component
    };

    componentWillMount () {
      if (this.state.Component === null) {
        this.mount().then(Component => {
          AsyncComponent.Component = Component
          if (this.mounted) {
            this.setState({ Component })
          }
        })
      }
    }

    componentDidMount () {
      this.mounted = true
    }

    componentWillUnmount () {
      this.mounted = false
    }

    mount () {
      if (store) {
        return getComponent(store).then(ms => {
          const [ model, reducerModel, reducerKey ] = ms
          injectReducer(store, { key: reducerKey, reducer: reducerModel.default })
          return model.default
        })
      } else {
        return getComponent().then(m => m.default)
      }
    }

    render () {
      const { Component } = this.state

      if (Component !== null) {
        return <Component {...this.props} />
      }
      return null   // or <div /> with a loading spinner, etc..
    }
  }
}
