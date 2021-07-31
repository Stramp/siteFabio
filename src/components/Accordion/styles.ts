import styled, { css } from 'styled-components'

export const Wrapper = styled.ul`
  ${({ theme }) => css`
    color: ${theme.colors.mainTxt};
    padding: 0 ${theme._d.spacings.xxsmall};
    margin-top: ${theme._d.spacings.medium};
    h3 {
      padding-bottom: calc(${theme._d.spacings.xxsmall} / 2);
      display: inline-block;
      justify-content: space-between;
      width: 90%;
    }
    .arrow {
      display: inline-block;
      width: 20px;
      height: 20px;
      border-right: 0.2rem solid ${theme.colors.mainTxt};
      border-bottom: 0.2rem solid ${theme.colors.mainTxt};
      margin-right: ${theme._d.spacings.xxsmall};
      margin-bottom: ${theme._d.spacings.xxsmall};
    }
    li {
      border-bottom: 1px solid ${theme.colors.mainTxt};
      margin-bottom: ${theme._d.spacings.xsmall};
    }
    p {
      margin-top: ${theme._d.spacings.xsmall};
      margin-bottom: ${theme._d.spacings.small};
    }
  `}
`
