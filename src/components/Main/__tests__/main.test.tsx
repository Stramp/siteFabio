import { render, screen } from '@testing-library/react'

import Main from '../'

describe('<Main />', () => {
  it('should render heading', () => {
    render(<Main />)
    expect(screen.getByRole('heading', { level: 1 }))
  })
  it('should render background red', () => {
    const { container } = render(<Main />)
    expect(container.firstChild).toHaveStyle({ 'background-color': 'red' })
    expect(container.firstChild).toMatchSnapshot()
  })
})
