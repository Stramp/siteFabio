import styled, { css } from 'styled-components'
import { SectionCoachProps } from '.'

export const Wrapper = styled.section<SectionCoachProps>`
  ${({ theme }) => css`
    margin-top: ${theme._d.spacings.xlarge};
    color: ${theme.colors.mainTxt};
    .container-img {
      display: flex;
      align-items: center;
      flex-direction: column;
      margin-top: ${theme._d.spacings.medium};
      margin-bottom: ${theme._d.spacings.medium};
      position: relative;
      img {
        position: absolute;
        bottom: 0;
        width: 23rem;
        height: 23rem;
      }
    }
  `}
`
export const Moldura = styled.div<SectionCoachProps>`
  ${({ theme }) => css`
    border: solid 1.3rem ${theme.colors.primary};
    width: 23rem;
    height: 23rem;
    transform: rotate(38deg) scale(0.9);
  `}
`
