import { ThemeProvider } from 'styled-components'
import * as T from 'styles/themes'
import GlobalStyles from 'styles/global'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'fullscreen'
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={T.currentTheme}>
      <Story />
      <GlobalStyles />
    </ThemeProvider>
  )
]
