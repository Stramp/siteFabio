import SectionEbook from '.'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<SectionEbook />', () => {
  it('should render component', () => {
    //renderizar componente utilizando o 'render'
    //selecionar elemento a ser testado 'screen' (queries)
    //expect nosso teste
    expect(renderWithTheme(<SectionEbook />))
  })
})
