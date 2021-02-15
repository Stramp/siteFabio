import styled, { css } from 'styled-components'
import { DescriptionProps } from '.'

export const P = styled.p<DescriptionProps>`
  line-height: 1.3rem;
  padding: 0 10px;
  ${({ theme }) => css`
    color: ${theme.colors.mainTxt};
  `}
`
export const Button = styled.span<DescriptionProps>`
  padding-left: 5px;
  font-weight: 600;
  cursor: pointer;
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: ${theme._d.font.sizes.xsmall};
  `}
`
export const Div = styled.div<DescriptionProps>`
  display: flex;
  overflow: hidden;
  transition: all 1s;
  margin-top: 15px;
`