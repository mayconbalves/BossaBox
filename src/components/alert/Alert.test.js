import React from 'react'
import { mount } from 'enzyme'
import Alert from './Alert'

describe('<Modal />', () => {
  let props

  beforeEach(() => {
    props = {
      handleDeleteTool: () => {},
      setAlert: () => {},
      id: 1,
      tool: 'nodejs'
    }
  })

  it('render component', () => {
    const component = mount(<Alert {...props} />)

    expect(component.find('div')).toHaveLength(2)
    expect(component.find('h4')).toHaveLength(1)
    expect(component.find('button')).toHaveLength(2)
  })
})
