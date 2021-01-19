import { screen } from '@testing-library/react'
import TelefoneLogo from '.'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<TelefoneLogo />', () => {
  it('should render component', () => {
    renderWithTheme(<TelefoneLogo />)
    expect(screen.getByLabelText(/Telefone/i).parentElement)
  })
})
