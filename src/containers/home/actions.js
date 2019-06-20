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

const fetchAddToolsSuccess = data => {
  console.log(data)
  return {
    type: DELETE_TOOLS_SUCCESS,
    payload: data
  }
}

const fetchAddToolsError = error => {
  return {
    type: DELETE_TOOLS_ERROR,
    payload: error
  }
}

export const fetchAddTools = () => dispatch => {
  const body = {
    title: 'hotel',
    link: 'https://github.com/typicode/hotel',
    description: 'Local app manager. Start apps within your browser, developer tool with local .localhost domain and https out of the box.',
    tags:['node', 'organizing', 'webapps', 'domain', 'developer', 'https', 'proxy']
  }

  fetch(api.TOOLS, {
    ContentType: 'application/json',
    method: 'POST',
    body
  })
    .then(resp => resp.json())
    .then(response => dispatch(fetchAddToolsSuccess(response)))
    .catch(error => dispatch(fetchAddToolsError(error)))
}
