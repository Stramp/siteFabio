import type { AppProps /*, AppContext */ } from 'next/app'
import Head from 'next/head'
import GlobalStyles from 'styles/global'
import { ThemeProvider } from 'styled-components'
import * as T from 'styles/themes'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={T.dark}>
      <Head>
        <title>Improve Trainer</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Site Fabio Morelli Trainer" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
