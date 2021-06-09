import MainBanner from '.'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<MainBanner />', () => {
  it('should render component', () => {
    //renderizar componente utilizando o 'render'
    //selecionar elemento a ser testado 'screen' (queries)
    //expect nosso teste
    expect(renderWithTheme(<MainBanner />))
  })
})
