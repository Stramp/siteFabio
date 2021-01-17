import InstaLogo from '.'
import { renderWithTheme } from '../../../utils/tests/helpers'

describe('<InstaLogo />', () => {
  it('should render instalog #b6aeae', () => {
    expect(renderWithTheme(<InstaLogo />))
  })
})
