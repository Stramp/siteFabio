import type { AppProps /*, AppContext */ } from 'next/app'
import Head from 'next/head'
import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Fabio Morelli Trainer</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Site Fabio Morelli Trainer" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
