import React from 'react'
import renderer from 'react-test-renderer'

import Display from './Display'

describe('<Display />', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<Display />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
