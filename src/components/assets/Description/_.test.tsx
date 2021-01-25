import { fireEvent, screen } from '@testing-library/react'
import Description from '.'
import { renderWithTheme } from 'utils/tests/helpers'
import { currentTheme } from 'styles/themes'

describe('<Description />', () => {
  it('should render component short description', () => {
    renderWithTheme(<Description text="texto de teste" />)
    expect(screen.getAllByText(/teste/i)[0]).toHaveStyle({
      color: currentTheme.colors.mainTxt
    })
  })
  it('should render component long description', () => {
    const txt = `
    O valor mínimo para pedidos no Trimais será a partir de R$ 150,00. O valor total de sua compra poderá ser alterado, para mais ou para menos, por conta dos produtos de peso variável. Para melhor atender nossos clientes, não vendemos por atacado e reservamo-nos o direito de limitar a 12 unidades a quantidade de produtos por cliente.
    `
    renderWithTheme(<Description text={txt} />)
    expect(screen.getAllByText(/Trimais/i)[0]).toHaveStyle({
      color: currentTheme.colors.mainTxt
    })
    expect(screen.getAllByText(/Saiba/i)[0]).toBeInTheDocument()
    fireEvent.click(screen.getAllByText(/Saiba/i)[0])
    expect(screen.getAllByText(/recolher/i)[0]).toHaveStyle({
      color: currentTheme.colors.primary
    })
  })
})
