import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    margin-top: ${theme._d.spacings.xlarge};
    color: ${theme.colors.mainTxt};
  `}
`
