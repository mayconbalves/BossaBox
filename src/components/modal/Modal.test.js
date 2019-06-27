import React from 'react'
import { mount } from 'enzyme'
import Modal from './Modal'

describe('<Modal />', () => {
  let props

  beforeEach(() => {
    props = {
      fetchAddTools: () => {}
    }
  })

  it('render component', () => {
    const component = mount(<Modal {...props} />)

    expect(component.find('h4')).toHaveLength(1)
    expect(component.find('div')).toHaveLength(14)
    expect(component.find('input')).toHaveLength(3)
    expect(component.find('textarea')).toHaveLength(1)
  })
})