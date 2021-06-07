import styled, { css } from 'styled-components'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    position: fixed;
    top: calc(${theme._d.grid.gutter} / 4);
    width: 100%;
    max-width: 130rem;
    background: rgb(13, 13, 13);
    background: linear-gradient(
      180deg,
      rgba(13, 13, 13, 1) 40%,
      rgba(255, 255, 255, 0) 100%
    );
    height: 10rem;
    .logo {
      float: left;
      padding: 0.8rem;
    }
  `}
`
