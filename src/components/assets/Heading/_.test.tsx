import { screen } from '@testing-library/react'
import Heading from '.'
import { renderWithTheme } from 'utils/tests/helpers'
import { currentTheme } from 'styles/themes'
import 'jest-styled-components'

describe('<Heading />', () => {
  it('should render component font-size currentTheme sizes default Mobile', () => {
    renderWithTheme(<Heading prevTit="tit" posTit="teste" sizeLine="100vw" />)
    expect(screen.getByRole('heading', { name: /teste/i })).toHaveStyle({
      fontSize: currentTheme._d.font.sizes.large
    })
  })
  it('should render component font-size currentTheme sizes in Desktop', () => {
    renderWithTheme(<Heading prevTit="tit" posTit="teste" sizeLine="100vw" />)
    expect(screen.getByRole('heading', { name: /teste/i })).toHaveStyleRule(
      'font-size',
      currentTheme._d.font.sizes.xxlarge,
      {
        media: '(min-width: 426px)'
      }
    )
  })

  it('should render line in component with color current theme', () => {
    renderWithTheme(<Heading prevTit="tit" posTit="teste" sizeLine="100vw" />)
    expect(screen.getByTitle(/lineTitle/i)).toHaveStyle({
      borderBottom: 'solid 1px ' + currentTheme.colors.mainTxt
    })
  })
})
