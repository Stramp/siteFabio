import styled, { css } from 'styled-components'
import { ButtonCtaProps } from '.'
import { motion } from 'framer-motion'

export const Wrapper = styled(motion.button)<ButtonCtaProps>`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.mainTxt};
  `}
  margin-top: 900px;
  padding: 8px 25px;
  letter-spacing: 0.5px;
  font-weight: 600;
  border: 0;
  border-radius: inherit;
`
