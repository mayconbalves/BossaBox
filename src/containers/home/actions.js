import {
  GET_TOOLS_ERROR,
  GET_TOOLS_SUCCESS,
  DELETE_TOOLS_ERROR,
  DELETE_TOOLS_SUCCESS,
  ADD_TOOLS_ERROR,
  ADD_TOOLS_SUCCESS
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

const searchToolsSuccess = data => {
  return {
    type: GET_TOOLS_SUCCESS,
    payload: data
  }
}

const searchToolsError = error => {
  return {
    type: GET_TOOLS_ERROR,
    payload: error
  }
}

export const fetchSearchTools = tool => dispatch => {
  fetch(`${api.TOOLS}?q=${tool}`)
    .then(resp => resp.json())
    .then(response => dispatch(searchToolsSuccess(response)))
    .catch(error => dispatch(searchToolsError(error)))
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
    .then(() => dispatch(fetchTools()))
}

const fetchAddToolsSuccess = data => {
  return {
    type: ADD_TOOLS_SUCCESS,
    payload: data
  }
}

const fetchAddToolsError = error => {
  return {
    type: ADD_TOOLS_ERROR,
    payload: error
  }
}

export const fetchAddTools = body => dispatch => {
  fetch(api.TOOLS, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(resp => resp.json())
    .then(response => dispatch(fetchAddToolsSuccess(response)))
    .catch(error => dispatch(fetchAddToolsError(error)))
    .then(() => dispatch(fetchTools()))
}
