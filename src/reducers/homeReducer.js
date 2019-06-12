import {
  GET_TOOLS_ERROR,
  GET_TOOLS_SUCCESS,
} from '../containers/home/types'

const initialState = {
  tools: [],
  error: null
}

export default function character (state = initialState, action) {
  switch(action.type) {
  case GET_TOOLS_SUCCESS:
    return {
      ...state,
      tools: action.payload,
      error: null
    }
  case GET_TOOLS_ERROR:
    return {
      tools: [],
      error: action.payload
    }
  default:
    return state
  }
}
