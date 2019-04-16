import React from 'react'
import { toBeDisabled } from 'jest-dom'
import renderer from 'react-test-renderer'
import { render, fireEvent } from 'react-testing-library'
import 'react-testing-library/cleanup-after-each'

import Controls from './Controls'

expect.extend({ toBeDisabled })

describe('<Controls />', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<Controls />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('should render', () => {
    render(<Controls />)
  })
  it('should render buttons', () => {
    const { getByText } = render(<Controls />)
    getByText(/close gate/i)
    getByText(/lock gate/i)
  })
  test('should call toggleClosed when button is clicked', () => {
    const toggleClosed = jest.fn()
    const { getByText } = render(<Controls toggleClosed={toggleClosed} />)
    const button = getByText(/close gate/i)
    fireEvent.click(button)
    expect(toggleClosed).toBeCalledTimes(1)
  })
  test('should disable open/close button when gate is locked', () => {
    const { getByText } = render(<Controls locked={true} />)
    const button = getByText(/close gate/i)
    expect(button).toBeDisabled()
  })
  test('should disable lock/unlock button when gate is open', () => {
    const { getByText } = render(<Controls closed={false} />)
    const button = getByText(/lock gate/i)
    expect(button).toBeDisabled()
  })
})
