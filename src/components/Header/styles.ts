import styled, { css } from 'styled-components'

export const Wrapper = styled.header`
  ${() => css`
    position: fixed;
    width: 100%;
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
