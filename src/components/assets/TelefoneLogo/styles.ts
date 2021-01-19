import styled, { css } from 'styled-components'
import { TelefoneLogoProps } from '.'

export const Wrapper = styled.main<TelefoneLogoProps>`
  ${({ theme, size }) => css`
    color: ${theme.colors.mainTxt};
    width: ${size};
    height: ${size};
  `}
`
