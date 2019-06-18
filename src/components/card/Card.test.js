import React from 'react'
import { shallow } from 'enzyme'
import Card from './Card'

describe('<Card />', () => {
  let props

  beforeEach(() => {
    props = {
      description: 'Node Js is wonderful',
      link: 'https://nodejs.org/en/',
      tags: ['node', 'nodejs', 'javascript'],
      title: 'Node Js'
    }
  })

  it('render component', () => {
    const component = shallow(<Card {...props} />)

    expect(component.find('div')).toHaveLength(1)
    expect(component.find('Row')).toHaveLength(3)
    expect(component.find('Col')).toHaveLength(6)
  })
})
