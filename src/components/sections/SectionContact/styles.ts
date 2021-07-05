import styled, { css } from 'styled-components'
import { SectionContactProps } from '.'

export const Wrapper = styled.section<SectionContactProps>`
  ${({ theme }) => css`
    color: ${theme.colors.mainTxt};
  `}
`
export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 0 ${theme._d.spacings.xxsmall};
    gap: ${theme._d.spacings.xxsmall};
    margin-top: ${theme._d.spacings.medium};
  `}
`
