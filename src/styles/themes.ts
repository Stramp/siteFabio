import _default from './defaultTheme'
const _d = _default
export const dark = {
  _d,
  colors: {
    primary: '#0088ff',
    secondary: '#3CD3C1',
    mainBg: '#0d0d0d',
    mainTxt: '#FAFAFA',
    lightGray: '#EAEAEA',
    gray: '#8F8F8F',
    darkGray: '#2E2F42',
    mainBgAlpha: '#0d0d0d00'
  }
} as const
export const light = {
  _d,
  colors: {
    primary: '#0088ff',
    secondary: '#3CD3C1',
    mainBg: '#FAFAFA',
    mainTxt: '#030517',
    lightGray: '#EAEAEA',
    gray: '#8F8F8F',
    darkGray: '#2E2F42',
    mainBgAlpha: '#FAFAFA00'
  }
} as const
export const currentTheme = light
