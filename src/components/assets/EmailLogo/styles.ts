import styled, { css } from 'styled-components'
import { EmailLogoProps } from '.'

export const Wrapper = styled.div<EmailLogoProps>`
  ${({ theme, size }) => css`
    color: ${theme.colors.mainTxt};
    width: ${size};
    height: ${size};
  `}
`
