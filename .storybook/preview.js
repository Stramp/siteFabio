import { ThemeProvider } from 'styled-components'
import * as T from '../src/styles/themes'
import GlobalStyles from '../src/styles/global'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={T.currentTheme}>
      <Story />
      <GlobalStyles />
    </ThemeProvider>
  )
]
