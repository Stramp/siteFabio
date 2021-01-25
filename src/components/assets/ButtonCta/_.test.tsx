import { screen } from '@testing-library/react'
import ButtonCta from '.'
import { renderWithTheme } from 'utils/tests/helpers'
import { currentTheme } from 'styles/themes'

describe('<ButtonCta />', () => {
  it('should render component', () => {
    renderWithTheme(<ButtonCta index={200}>{<b>teste</b>}</ButtonCta>)
    expect(screen.getByRole('button')).toHaveStyle({
      color: currentTheme.colors.mainTxt,
      backgroundColor: currentTheme.colors.primary
    })
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
