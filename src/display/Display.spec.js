import React from 'react'
import renderer from 'react-test-renderer'
import { render, fireEvent, cleanup } from 'react-testing-library'

import Display from './Display'

describe('<Display />', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<Display />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('should render', () => {
    render(<Display closed="true" locked="true" />)
    cleanup()
  })
  it('should be locked', () => {
    const { getByText } = render(<Display closed="true" locked="true" />)
    getByText(/locked/i)
    cleanup()
  })
  it('should be closed', () => {
    const { getByText } = render(<Display closed="true" locked="true" />)
    getByText(/closed/i)
    cleanup()
  })
})
