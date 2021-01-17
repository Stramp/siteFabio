import styled, { css } from 'styled-components'
import { InstaLogoProps } from '.'

export const Wrapper = styled.div<InstaLogoProps>`
  ${({ theme, color }) => css`
    color: ${theme.colors[color!]};
  `}
`
