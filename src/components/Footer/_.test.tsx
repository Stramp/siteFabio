import { render } from '@testing-library/react'
import Footer from '.'

describe('<Footer />', () => {
  it('should render heading', () => {
    expect(render(<Footer />))
  })
})
