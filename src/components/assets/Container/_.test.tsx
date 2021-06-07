import { Container } from '.'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<Container />', () => {
  it('should render component', () => {
    const { container } = renderWithTheme(
      <Container>
        <span>Site Fabio</span>
      </Container>
    )
    expect(container.firstChild).toBeInTheDocument()
  })
})
