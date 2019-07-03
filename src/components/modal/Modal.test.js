import React from 'react'
import { mount } from 'enzyme'
import Modal from './Modal'

describe('<Modal />', () => {
  let props

  beforeEach(() => {
    props = {
      fetchAddTools: () => {},
      toggleModal: () => {}
    }
  })

  it('render component', () => {
    const component = mount(<Modal {...props} />)

    expect(component.find('h5')).toHaveLength(1)
    expect(component.find('div')).toHaveLength(16)
    expect(component.find('input')).toHaveLength(3)
    expect(component.find('textarea')).toHaveLength(1)
  })
})
