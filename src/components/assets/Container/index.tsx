import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: ${theme._d.grid.container};
    padding-left: calc(${theme._d.grid.gutter} / 2);
    padding-right: calc(${theme._d.grid.gutter} / 2);
    margin-left: auto;
    margin-right: auto;
  `}
`
