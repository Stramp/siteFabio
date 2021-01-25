import styled, { css } from 'styled-components'
import { generateMedia } from 'styled-media-query'
import { HeadingProps } from '.'
import themeProps from '../../../styles/defaultTheme'

const customMedia = generateMedia(themeProps.breakpoints)

export const H2 = styled.h2<HeadingProps>`
  ${({ theme }) => css`
    color: ${theme.colors.mainTxt};
    font-size: ${theme._d.font.sizes.large};
    ${customMedia.greaterThan('lMobile')`
      font-size: ${theme._d.font.sizes.xxlarge};
    `}
    display: flex;
    gap: 0.5rem;
    flex-direction: row;
    margin-top: 1.5rem;
    padding-left: 10px;
  `}
`

export const Span = styled.span<HeadingProps>`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
  `}
`

export const Div = styled.div<HeadingProps>`
  ${({ theme, sizeLine }) => css`
    border-bottom: solid 1px ${theme.colors.mainTxt};
    width: ${sizeLine};
    align-self: flex-end;
    margin-top: 1.5rem;
  `}
`

export const Wraper = styled.div<HeadingProps>`
  display: flex;
  flex-direction: column;
`
