import styled, { css } from 'styled-components'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    position: fixed;
    top: calc(${theme._d.grid.gutter} / 4);
  `}
`
