import { ThemeProvider } from 'styled-components'
import { render, RenderResult } from '@testing-library/react'

import { currentTheme } from '../../styles/themes'

export const renderWithTheme = (children: React.ReactNode): RenderResult =>
  render(<ThemeProvider theme={currentTheme}>{children}</ThemeProvider>)
