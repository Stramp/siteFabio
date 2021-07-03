import Accordion from '.'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<Accordion />', () => {
  it('should render component', () => {
    //renderizar componente utilizando o 'render'
    //selecionar elemento a ser testado 'screen' (queries)
    //expect nosso teste
    expect(renderWithTheme(<Accordion />))
  })
})
