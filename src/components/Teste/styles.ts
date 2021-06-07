import styled, { css } from 'styled-components'
import { TesteProps } from '.'

export const Wrapper = styled.main<TesteProps>`
  ${({ theme }) => css`
    color: ${theme.colors.mainTxt};
  `}
`
