import {
  GET_TOOLS_ERROR,
  GET_TOOLS_SUCCESS
} from './types'

import api from '../../api'

const fetchToolsSuccess = data => {
  return {
    type: GET_TOOLS_SUCCESS,
    payload: data
  }
}

const fetchToolsError = error => {
  return {
    type: GET_TOOLS_ERROR,
    payload: error
  }
}

export const fetchTools = () => dispatch => {
  fetch(api.TOOLS)
    .then(resp => resp.json())
    .then(response => dispatch(fetchToolsSuccess(response)))
    .catch(error => dispatch(fetchToolsError(error)))
}
