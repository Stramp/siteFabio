import { render } from '@testing-library/react'
import Main from '.'

describe('<Main />', () => {
  it('should render heading', () => {
    expect(render(<Main />))
  })
})