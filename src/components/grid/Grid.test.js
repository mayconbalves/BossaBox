import React from 'react'
import { mount } from 'enzyme'
import Grid from './Grid'

describe('<Grid />', () => {
  let props

  beforeEach(() => {
    props = {
      children: ''
    }
  })

  it('render component', () => {
    const component = mount(<Grid {...props} />)

    expect(component.find('div')).toHaveLength(1)
  })
})
