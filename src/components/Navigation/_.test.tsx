import { render, screen } from '@testing-library/react'
import Navigation from '.'

describe('<Navigation />', () => {
  it('should render tag nav', () => {
    render(<Navigation />)
    expect(screen.getByRole('navigation'))
  })
})
