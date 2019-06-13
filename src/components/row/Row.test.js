import React from 'react'
import { mount, shallow } from 'enzyme'
import Row from './Row'

describe('<Row />', () => {
  let props

  beforeEach(() => {
    props = {
      children: ''
    }
  })

  it('render component', () => {
    const component = mount(<Row {...props} />)

    expect(component.find('div')).toHaveLength(1)
  })
})
