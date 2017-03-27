// @flow
import type { Dispatch } from 'redux'
import type { Action } from 'store/reducers'

// ------------------------------------
// Constants
// ------------------------------------
const REQUEST_REPOS = 'REQUEST_REPOS'
const RECEIVE_REPOS = 'RECEIVE_REPOS'
const INVALID_REPOS = 'INVALID_REPOS'

// ------------------------------------
// Actions
// ------------------------------------
export const requestRepos = () => {
  return {
    type: REQUEST_REPOS
  }
}

export const receiveRepos = (payload: any) => {
  return {
    type: RECEIVE_REPOS,
    payload
  }
}

export const invalidRepos = (payload: any) => {
  return {
    type: INVALID_REPOS,
    payload
  }
}

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */
export const fetchRepos = () => {
  return (dispatch: Dispatch<Action>, getState: () => Object) => {
    dispatch(requestRepos())
    fetch('https://api.github.com/orgs/k2data/repos')
      .then((res) => res.json())
      .then((json) => {
        dispatch(receiveRepos(json))
      })
      .catch((error) => {
        console.error(error)
        dispatch(invalidRepos(error))
      })
  }
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [REQUEST_REPOS] : (state, action) => Object.assign({}, state, { isFetching: true }),
  [RECEIVE_REPOS] : (state, action) => Object.assign({}, state, {
    isFetching: false,
    error: null,
    data: action.payload
  }),
  [INVALID_REPOS] : (state, action) => Object.assign({}, state, {
    isFetching: true,
    error: action.payload
  })
}

// ------------------------------------
// Reducer
// ------------------------------------
type State = {
  isFetching: boolean,
  data?: Object,
  error?: Object
}
const initialState = {
  isFetching: false
}

export default function githubReposReducer (state: State = initialState, action: Object) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
