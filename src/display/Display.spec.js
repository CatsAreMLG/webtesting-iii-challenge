import React from 'react'
import renderer from 'react-test-renderer'
import { render, fireEvent } from 'react-testing-library'
import 'react-testing-library/cleanup-after-each'

import Display from './Display'

describe('<Display />', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<Display />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('should render', () => {
    render(<Display closed="true" locked="true" />)
  })
  it('should default to unlocked', () => {
    const { getByText } = render(<Display />)
    getByText(/unlocked/i)
  })
  it('should default to open', () => {
    const { getByText } = render(<Display />)
    getByText(/open/i)
  })
  it('should be locked', () => {
    const { getByText } = render(<Display closed={true} locked={true} />)
    getByText(/locked/i)
  })
  it('should be closed', () => {
    const { getByText } = render(<Display closed={true} locked={true} />)
    getByText(/closed/i)
  })
  it('should be unlocked', () => {
    const { getByText } = render(<Display closed={false} locked={false} />)
    getByText(/unlocked/i)
  })
  it('should be green-led', () => {
    const { getByText } = render(<Display closed={false} locked={false} />)
    expect(getByText(/open/i).classList[1]).toEqual('green-led')
    expect(getByText(/unlocked/i).classList[1]).toEqual('green-led')
  })
  it('should be red-led', () => {
    const { getByText } = render(<Display closed={true} locked={true} />)
    expect(getByText(/closed/i).classList[1]).toEqual('red-led')
    expect(getByText(/locked/i).classList[1]).toEqual('red-led')
  })
})
