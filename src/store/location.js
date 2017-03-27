// @flow
import type { Action } from './reducers'
import type { Dispatch } from 'redux'
// ------------------------------------
// Constants
// ------------------------------------
export const LOCATION_CHANGE = 'LOCATION_CHANGE'

// ------------------------------------
// Actions
// ------------------------------------
export function locationChange (location: string = '/') {
  return {
    type    : LOCATION_CHANGE,
    payload : location
  }
}

// ------------------------------------
// Specialized Action Creator
// ------------------------------------
export const updateLocation = ({ dispatch }: { dispatch: Dispatch<Action> }) => {
  return (nextLocation: string) => dispatch(locationChange(nextLocation))
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = null
export default function locationReducer (state: any = initialState, action: Action) {
  return action.type === LOCATION_CHANGE
    ? action.payload
    : state
}
