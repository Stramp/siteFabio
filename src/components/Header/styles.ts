import styled, { css } from 'styled-components'

export const Wrapper = styled.header`
  ${() => css`
    position: fixed;
    top: 0;
    width: 100%;
    max-width: 130rem;
    background: rgb(13, 13, 13);
    background: linear-gradient(
      180deg,
      rgba(13, 13, 13, 1) 60%,
      rgba(255, 255, 255, 0) 100%
    );
    height: 10rem;
    z-index: 1;
    .logo {
      float: left;
      padding: 0.8rem;
    }
  `}
`
