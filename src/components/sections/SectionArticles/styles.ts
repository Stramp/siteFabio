import styled, { css } from 'styled-components'
import { SectionArticlesProps } from '.'

export const Wrapper = styled.main<SectionArticlesProps>`
  ${({ theme }) => css`
    margin-top: ${theme._d.spacings.medium};
    color: ${theme.colors.mainTxt};
  `}
`
