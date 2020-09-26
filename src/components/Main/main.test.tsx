import { render, screen } from '@testing-library/react'
import Main from '.'

describe('<Main />', () => {
  it('should render heading', () => {
    render(<Main />)
    expect(screen.getByRole('heading', { level: 1 }))
  })
})
