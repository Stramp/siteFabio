import styled, { css } from 'styled-components'
import { MainBannerProps } from '.'

export const Wrapper = styled.main<MainBannerProps>`
  ${({ theme }) => css`
    color: ${theme.colors.mainTxt};
  `}
`
