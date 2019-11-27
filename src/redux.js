import { createStore, combineReducers } from "redux"

const data = 1

const count = function (state = data, payload) {
  return state
}

export default createStore(count)
