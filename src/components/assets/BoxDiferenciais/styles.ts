import styled, { css } from 'styled-components'
import { BoxDiferenciaisItemsProps } from '.'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.mainTxt};
  `}
`
export const ItemList = styled.li<BoxDiferenciaisItemsProps>`
  ${({ theme, img }) => css`
    background-image: url(${img});
    background-color: ${theme.colors.mainBg};
    background-position: center;
    object-fit: cover;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: ${theme._d.spacings.medium};
    padding: ${theme._d.spacings.small} ${theme._d.spacings.xxsmall};
    max-height: 10rem;
    p {
      font-size: ${theme._d.font.sizes.xsmall};
      font-weight: ${theme._d.font.normal};
      word-break: break-word;
      letter-spacing: 0.15rem;
      width: 80%;
      max-height: 8rem;
      z-index: 2;
      color: white;
      text-shadow: -1px -1px 5px black, 1px 1px 5px black, 0 0 1rem black;
    }
    h5 {
      z-index: 2;
      font-size: calc(${theme._d.font.sizes.xxlarge} * 2.5);
      font-style: italic;
      font-weight: ${theme._d.font.black};
      color: ${theme.colors.primary};
      line-height: calc(${theme._d.font.sizes.xlarge} * 2.2);
      text-shadow: -1px -1px 25px black, 1px 1px 25px black;
    }
    &::before {
      content: '';
      opacity: 0.6;
      background-color: black;
      width: 100%;
      height: 10rem;
      position: absolute;
      background-blend-mode: multiply;
    }
  `}
`
