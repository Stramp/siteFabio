import { screen } from '@testing-library/react'
import Logo from '.'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<Logo />', () => {
  it('should render component', () => {
    //renderizar componente utilizando o 'render'
    //selecionar elemento a ser testado 'screen' (queries)
    //expect nosso teste
    renderWithTheme(<Logo />)
    expect(screen.findByLabelText(/Fabio Morelli Trainee Art/i))
  })
})
