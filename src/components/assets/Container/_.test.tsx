import { currentTheme } from 'styles/themes'
import { Container } from '.'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<Container />', () => {
  it('should render component', () => {
    const { container } = renderWithTheme(
      <Container>
        <span>Site Fabio</span>
      </Container>
    )
    expect(container.firstChild).toHaveStyleRule(
      'max-width',
      currentTheme._d.grid.container
    )
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        max-width: 130rem;
        padding-left: calc(3.2rem / 2);
        padding-right: calc(3.2rem / 2);
        margin-left: auto;
        margin-right: auto;
      }

      <div
        class="c0"
      >
        <span>
          Site Fabio
        </span>
      </div>
    `)
  })
})
