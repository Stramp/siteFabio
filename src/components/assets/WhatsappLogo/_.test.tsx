import { screen } from '@testing-library/react'
import WhatsappLogo from '.'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<WhatsappLogo />', () => {
  it('should render component', () => {
    renderWithTheme(<WhatsappLogo />)
    expect(screen.getByLabelText(/Whatsapp/i).parentElement)
  })
})
