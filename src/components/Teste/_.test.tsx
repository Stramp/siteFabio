import { screen } from '@testing-library/react'
import Teste from '.'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<Teste />', () => {
  it('should render component', () => {
    //renderizar componente utilizando o 'render'
    //selecionar elemento a ser testado 'screen' (queries)
    //expect nosso teste
    expect(renderWithTheme(<Teste />))
  })
})
