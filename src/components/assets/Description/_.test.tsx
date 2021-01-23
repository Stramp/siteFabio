import { screen } from '@testing-library/react'
import Description from '.'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<Description />', () => {
  it('should render component', () => {
    //renderizar componente utilizando o 'render'
    //selecionar elemento a ser testado 'screen' (queries)
    //expect nosso teste
    renderWithTheme(<Description text="texto de teste" />)
    expect(screen.getAllByText(/texto de teste/i))
  })
})
