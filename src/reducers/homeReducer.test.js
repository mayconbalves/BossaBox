import homeReducer from './homeReducer'

import {
  GET_TOOLS_ERROR,
  GET_TOOLS_SUCCESS,
  DELETE_TOOLS_ERROR,
  DELETE_TOOLS_SUCCESS,
  ADD_TOOLS_ERROR,
  ADD_TOOLS_SUCCESS
} from '../containers/home/types'

describe('Reducer: home', () => {
  describe('when doesnt have action', () => {
    it('should returns default state', () => {
      const expected = {
        tools: [],
        error: null
      }

      expect(homeReducer(undefined, {})).toEqual(expected)
    })
  })

  describe('when is dispatch GET_TOOLS_SUCCESS', () => {
    it('should set home from action payload', () => {
      const payload = [{}]
      const action = { type: GET_TOOLS_SUCCESS, payload }

      const expected = {
        error: null,
        tools: action.payload
      }

      expect(homeReducer(undefined, action)).toEqual(expected)
    })
  })

  describe('when is dispatch GET_TOOLS_ERROR', () => {
    it('should get tools error', () => {
      const payload = [{}]
      const action = { type: GET_TOOLS_ERROR, payload }

      const expected = {
        tools: [],
        error: action.payload
      }

      expect(homeReducer(undefined, action)).toEqual(expected)
    })
  })

  describe('when is dispatch DELETE_TOOLS_SUCCESS', () => {
    it('should set home from action payload', () => {
      const payload = [{}]
      const action = { type: DELETE_TOOLS_SUCCESS, payload }

      const expected = {
        error: null,
        tools: [action.payload]
      }

      expect(homeReducer(undefined, action)).toEqual(expected)
    })
  })

  describe('when is dispatch DELETE_TOOLS_ERROR', () => {
    it('should delete tool occurrence error', () => {
      const payload = [{}]
      const action = { type: DELETE_TOOLS_ERROR, payload }

      const expected = {
        tools: [],
        error: action.payload
      }

      expect(homeReducer(undefined, action)).toEqual(expected)
    })
  })

  describe('when is dispatch ADD_TOOLS_SUCCESS', () => {
    it('should add new tool', () => {
      const payload = [{}]
      const action = { type: ADD_TOOLS_SUCCESS, payload }

      const expected = {
        error: null,
        tools: [action.payload]
      }

      expect(homeReducer(undefined, action)).toEqual(expected)
    })
  })

  describe('when is dispatch ADD_TOOLS_ERROR', () => {
    it('shouldnt add tool', () => {
      const payload = [{}]
      const action = { type: ADD_TOOLS_ERROR, payload }

      const expected = {
        tools: [],
        error: action.payload
      }

      expect(homeReducer(undefined, action)).toEqual(expected)
    })
  })
})
