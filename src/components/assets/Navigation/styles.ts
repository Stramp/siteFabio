import styled, { css } from 'styled-components'
import { generateMedia } from 'styled-media-query'
import { NavigationProps } from '.'
import themeProps from '../../../styles/defaultTheme'

const customMedia = generateMedia(themeProps.breakpoints)

export const Wrapper = styled.main<NavigationProps>`
  ${({ theme }) => css`
    color: ${theme.colors.mainTxt};
  `}
`
export const MenuSection = styled.menu``

export const Nav = styled.nav<NavigationProps>`
  ${({ hideOn, theme }) => css`
    opacity: ${hideOn ? '1' : '0'};
    pointer-events: ${hideOn ? 'all' : 'none'};
    ${customMedia.greaterThan('lMobile')`
      opacity: 1;
    `}
    z-index: ${theme._d.layers.menu};
    background: ${'linear-gradient(-64deg,' +
    theme.colors.mainBg +
    ' 57%, ' +
    theme.colors.mainBgAlpha +
    ' 60%)'};
    transform: ${hideOn ? 'translateX(0)' : 'translateX(10rem)'};
  `}
  transition: all 0.3s ease-in;
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
  padding-top: 40px;
  ${customMedia.greaterThan('lMobile')`
    position: inherit;
    width: fit-content;
    height: fit-content;
    flex-direction: row;
  `}
`

export const Login = styled.div`
  background: red;
  width: 100%;
  position: relative;
  ${customMedia.greaterThan('lMobile')`
    width: inherit;
  `}
`

export const Ul = styled.ul<NavigationProps>`
  display: flex;
  letter-spacing: -0.2rem;
  font-size: 2.6rem;
  text-transform: uppercase;
  transition: all 250ms linear 0s;
  flex-direction: column;
  width: 30vw;
  min-width: 200px;
  height: fit-content;
  min-height: 200px;
  gap: 15px;
  ${customMedia.greaterThan('lMobile')`
    flex-direction: row;
    position: inherit;
    width: fit-content;
    height: fit-content;
    min-height: inherit;
  `}
`
export const Li = styled.li`
  list-style: none;
  ${({ theme }) => css`
    background: ${theme.colors.mainBg};
    border: 1px solid ${theme.colors.mainTxt};
  `}
  text-align: end;
  height: fit-content;
`
export const A = styled.a`
  padding: 10px;
  letter-spacing: -0.2rem;
  font-size: 2.6rem;
  text-transform: uppercase;
  text-decoration: none;
  ${({ theme }) => css`
    color: ${theme.colors.mainTxt};
    &:hover {
      color: ${theme.colors.primary};
      cursor: pointer;
    }
  `}
`

export const MenuToggle = styled.div`
  &:hover {
    cursor: pointer;
  }
  display: block;
  width: 40px;
  height: 40px;
  position: fixed;
  right: 10px;
  ${customMedia.greaterThan('lMobile')`
    display: none;
  `}
  ${({ theme }) => css`
    z-index: ${theme._d.layers.menu + 1};
  `}
`

export const Dash1 = styled.div<NavigationProps>`
  ${({ theme, hideOn }) => css`
    background: ${theme.colors.mainTxt};
    transform: ${hideOn ? 'rotate(-45deg) translate(-13px,8px)' : 'rotate(0)'};
  `}
  transition: transform 0.3s ease-in;
  height: 5px;
  width: 100%;
  margin: 6px auto;
`

export const Dash2 = styled.div<NavigationProps>`
  ${({ theme, hideOn }) => css`
    opacity: ${hideOn ? '0' : '1'};
    background: ${theme.colors.mainTxt};
  `}
  transition: opacity 0.3s ease-in;
  height: 5px;
  width: 70%;
  align-self: flex-end;
  margin: 6px auto;
`
export const Dash3 = styled.div<NavigationProps>`
  ${({ theme, hideOn }) => css`
    background: ${theme.colors.mainTxt};
    transform: ${hideOn
      ? 'rotate(45deg) translate(-7px,-2px)'
      : 'transform": "rotate(0)'};
  `}
  transition: transform 0.3s ease-in;
  height: 5px;
  width: 100%;
  margin: 6px auto;
`
