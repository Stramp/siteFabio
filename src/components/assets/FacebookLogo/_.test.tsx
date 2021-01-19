import { screen } from '@testing-library/react'
import FacebookLogo from '.'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<FacebookLogo />', () => {
  it('should render component', () => {
    renderWithTheme(<FacebookLogo />)
    expect(screen.getByLabelText(/Facebook/i).parentElement)
  })
})
