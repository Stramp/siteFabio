import styled, { css } from 'styled-components'
import { FormWhatsProps } from '.'

export const Wrapper = styled.div<FormWhatsProps>`
  ${({ theme }) => css`
    margin-top: ${theme._d.spacings.medium};
    textarea {
      max-width: 600px;
      width: 90%;
      display: block;
      margin: 0 auto;
      padding: ${theme._d.spacings.xxsmall};
    }
  `}
`
