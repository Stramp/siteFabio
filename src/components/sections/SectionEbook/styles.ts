import styled, { css } from 'styled-components'
import { SectionEbookProps } from '.'

export const Wrapper = styled.section<SectionEbookProps>`
  ${({ theme }) => css`
    margin-top: ${theme._d.spacings.xlarge};
    color: ${theme.colors.mainTxt};
    background-image: url('https://picsum.photos/800/600?random=65');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 37rem;
    display: flex;
    align-items: flex-end;
    .content {
      padding-bottom: ${theme._d.spacings.xsmall};
      flex-grow: 1;
      position: relative;
      &::before {
        content: '';
        opacity: 0.6;
        background-color: black;
        width: 100%;
        height: 100%;
        position: absolute;
      }
    }
  `}
`
