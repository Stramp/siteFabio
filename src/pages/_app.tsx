import type { AppProps /*, AppContext */ } from 'next/app'
import Head from 'next/head'
import GlobalStyles from 'styles/global'
import { ThemeProvider } from 'styled-components'
import * as T from 'styles/themes'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={T.currentTheme}>
      <Head>
        <title>Fabio Morelli Trainer</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Site Fabio Morelli Trainer" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
