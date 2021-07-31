import styled, { css } from 'styled-components'
import { DescriptionProps } from '.'

export const P = styled.p<DescriptionProps>`
  line-height: 2rem;
  padding: 0 10px;
  z-index: 2;
  ${({ theme }) => css`
    color: ${theme.colors.mainTxt};
    font-size: ${theme._d.font.sizes.small};
    font-weight: ${theme._d.font.normal};
    letter-spacing: calc(${theme._d.spacings.xxsmall} / 4);
  `}
`
export const Button = styled.span<DescriptionProps>`
  padding-left: 5px;
  font-weight: 600;
  cursor: pointer;
  z-index: 2;
  display: inline-block;
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    margin-right: ${theme._d.spacings.xsmall};
    margin-top: ${theme._d.spacings.xsmall};
    font-size: ${theme._d.font.sizes.xsmall};
  `}
`
export const Div = styled.div<DescriptionProps>`
  display: flex;
  overflow: hidden;
  transition: all 1s;
  margin-top: 15px;
  flex-direction: column;
  align-items: center;
`
