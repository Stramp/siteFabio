import styled, { css } from 'styled-components'
import { WhatsappLogoProps } from '.'

export const Wrapper = styled.main<WhatsappLogoProps>`
  ${({ theme, size }) => css`
    color: ${theme.colors.mainTxt};
    width: ${size};
    height: ${size};
  `}
`
