import FormWhats from '.'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<FormWhats />', () => {
  it('should render component', () => {
    //renderizar componente utilizando o 'render'
    //selecionar elemento a ser testado 'screen' (queries)
    //expect nosso teste
    expect(renderWithTheme(<FormWhats />))
  })
})
