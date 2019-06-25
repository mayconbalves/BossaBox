import homeReducer from './homeReducer'

import {
  GET_TOOLS_ERROR,
  GET_TOOLS_SUCCESS
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
    it('should set home from action payload', () => {
      const payload = [{}]
      const action = { type: GET_TOOLS_ERROR, payload }

      const expected = {
        tools: [],
        error: payload
      }

      expect(homeReducer(undefined, action)).toEqual(expected)
    })
  })
})
