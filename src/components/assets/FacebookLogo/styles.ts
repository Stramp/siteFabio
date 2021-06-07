import styled, { css } from 'styled-components'
import { FacebookLogoProps } from '.'

export const Wrapper = styled.div<FacebookLogoProps>`
  ${({ theme, size }) => css`
    color: ${theme.colors.mainTxt};
    width: ${size};
  `}
`
