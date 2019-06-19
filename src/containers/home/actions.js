import {
  GET_TOOLS_ERROR,
  GET_TOOLS_SUCCESS,
  DELETE_TOOLS_ERROR,
  DELETE_TOOLS_SUCCESS
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

const fetchDeleteToolsSuccess = data => {
  return {
    type: DELETE_TOOLS_SUCCESS,
    payload: data
  }
}

const fetchDeleteToolsError = error => {
  return {
    type: DELETE_TOOLS_ERROR,
    payload: error
  }
}

export const fetchDeleteTools = id => dispatch => {
  fetch(`${api.TOOLS}/${id}`, {
    method: 'DELETE'
  })
    .then(resp => resp.json())
    .then(response => dispatch(fetchDeleteToolsSuccess(response)))
    .catch(error => dispatch(fetchDeleteToolsError(error)))
}
