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
      text-shadow: 0px 0px 0px ${theme.colors.mainTxt},
        -2px -2px 3px ${theme.colors.mainBg}, 2px 2px 3px ${theme.colors.mainBg},
        0 0 0.5rem ${theme.colors.mainBg};
      z-index: 2;
    }
    h5 {
      z-index: 2;
      font-size: calc(${theme._d.font.sizes.xxlarge} * 2.5);
      font-style: italic;
      font-weight: ${theme._d.font.black};
      color: ${theme.colors.primary};
      line-height: calc(${theme._d.font.sizes.xlarge} * 2.2);
    }
    &::before {
      content: '';
      opacity: 0.4;
      background-color: ${theme.colors.mainBg};
      width: 100%;
      height: 10rem;
      position: absolute;
    }
  `}
`
