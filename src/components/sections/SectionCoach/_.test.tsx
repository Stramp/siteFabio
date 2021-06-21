import SectionCoach from '.'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<SectionCoach />', () => {
  it('should render component', () => {
    //renderizar componente utilizando o 'render'
    //selecionar elemento a ser testado 'screen' (queries)
    //expect nosso teste
    expect(renderWithTheme(<SectionCoach />))
  })
})
