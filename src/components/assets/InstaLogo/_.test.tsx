import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import { currentTheme } from 'styles/themes'

import InstaLogo from '.'

describe('<InstaLogo />', () => {
  it('should render whith label Instagram fill color of currentThema', () => {
    renderWithTheme(<InstaLogo />)
    expect(screen.getByLabelText(/Instagram/i).parentElement).toHaveStyle({
      color: currentTheme.colors.mainTxt
    })
  })
})
