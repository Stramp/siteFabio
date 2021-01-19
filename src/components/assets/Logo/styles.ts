import styled, { css } from 'styled-components'
import { LogoProps } from '.'

export const Wrapper = styled.main<LogoProps>`
  ${({ theme, size }) => css`
    color: ${theme.colors.mainTxt};
    width: ${size};
  `}
`
