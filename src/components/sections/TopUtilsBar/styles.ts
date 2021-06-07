import styled, { css } from 'styled-components'
import { TopUtilsBarProps } from '.'

export const Wrapper = styled.div<TopUtilsBarProps>`
  ${({ theme }) => css`
    color: ${theme.colors.mainTxt};
    display: flex;
    justify-content: space-between;
    padding: 0.8rem;
    border-bottom: 0.1px solid ${theme.colors.mainTxt};
    height: 4rem;
    .social-media {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .dark-mode {
      display: flex;
      align-items: center;
      .bg {
        width: 5rem;
        height: 1.2rem;
        border: 0.1rem solid ${theme.colors.mainTxt};
        border-radius: 8px;
      }
      i {
        width: 2.3rem;
        height: 2.3rem;
        color: ${theme.colors.mainTxt};
        position: absolute;
        cursor: pointer;
      }
    }
  `}
`
