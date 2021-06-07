import styled, { css } from 'styled-components'
import { InstaLogoProps } from '.'

export const Wrapper = styled.div<InstaLogoProps>`
  ${({ theme, size }) => css`
    color: ${theme.colors.mainTxt};
    width: ${size};
  `}
`
