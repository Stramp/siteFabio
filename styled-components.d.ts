import { currentTheme } from 'styles/themes'

type Theme = typeof currentTheme

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
