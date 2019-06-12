import React from 'react'
import { shallow } from 'enzyme'
import { Home } from './Home'

describe('<Home />', () => {
  let props

  beforeEach(() => {
    props = {
      fetchTools: () => {},
      tools: []
    }
  })

  it('render component without problems', () => {
    const component = shallow(<Home {...props} />)

    expect(component.find('h1')).toHaveLength(1)
  })
})
