import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: ${theme._d.grid.container};
    margin-left: auto;
    margin-right: auto;
  `}
`
