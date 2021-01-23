import { screen } from '@testing-library/react'
import ButtonCta from '.'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<ButtonCta />', () => {
  it('should render component', () => {
    //renderizar componente utilizando o 'render'
    //selecionar elemento a ser testado 'screen' (queries)
    //expect nosso teste
    renderWithTheme(<ButtonCta>{<b>teste</b>}</ButtonCta>)
    expect(screen.getByText(/teste/i))
  })
})
