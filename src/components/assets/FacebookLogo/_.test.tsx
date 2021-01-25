import { screen } from '@testing-library/react'
import FacebookLogo from '.'
import { renderWithTheme } from 'utils/tests/helpers'
import { currentTheme } from 'styles/themes'

describe('<FacebookLogo />', () => {
  it('should render component', () => {
    renderWithTheme(<FacebookLogo />)
    expect(screen.getByLabelText(/Facebook/i).parentElement).toHaveStyle({
      color: currentTheme.colors.mainTxt,
      width: '15px'
    })
  })
})
