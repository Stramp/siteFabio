import styled, { css } from 'styled-components'
import { ButtonCtaProps } from '.'
import { motion } from 'framer-motion'

export const Wrapper = styled(motion.button)<ButtonCtaProps>`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.mainTxt};
    padding: 8px 25px;
    letter-spacing: 0.5px;
    font-weight: 600;
    border: 0;
    margin-top: ${theme._d.spacings.small};
    border-radius: inherit;
    display: flex;
    margin-left: auto;
    margin-right: ${theme._d.spacings.xsmall};
  `}
`
