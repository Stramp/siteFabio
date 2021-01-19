import { screen } from '@testing-library/react'
import Heading from '.'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<Heading />', () => {
  it('should render component', () => {
    //renderizar componente utilizando o 'render'
    //selecionar elemento a ser testado 'screen' (queries)
    //expect nosso teste
    renderWithTheme(<Heading prevTit="tit" posTit="teste" sizeLine="100vw" />)
    expect(screen.getByText(/teste/i))
  })
})
