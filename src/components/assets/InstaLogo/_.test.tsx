import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import InstaLogo from '.'

describe('<InstaLogo />', () => {
  it('should render whith label Instagram', () => {
    renderWithTheme(<InstaLogo />)
    expect(screen.getByLabelText(/Instagram/i).parentElement)
  })
})
