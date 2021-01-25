import { screen } from '@testing-library/react'
import WhatsappLogo from '.'
import { renderWithTheme } from 'utils/tests/helpers'
import { currentTheme } from 'styles/themes'

describe('<WhatsappLogo />', () => {
  it('should render component label Whatsapp fill currentTheme color and width 15px default', () => {
    renderWithTheme(<WhatsappLogo />)
    expect(screen.getByLabelText(/Whatsapp/i).parentElement).toHaveStyle({
      color: currentTheme.colors.mainTxt,
      width: '15px'
    })
  })
})
