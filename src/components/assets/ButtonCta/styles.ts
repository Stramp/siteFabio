import styled, { css } from 'styled-components'
import { ButtonCtaProps } from '.'

export const Wrapper = styled.button<ButtonCtaProps>`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.mainTxt};
  `}
  padding: 8px 25px;
  letter-spacing: 0.5px;
  font-weight: 600;
  border: 0;
  border-radius: inherit;
`
