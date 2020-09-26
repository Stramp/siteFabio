import type { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles from 'styles/global'

function MyApp({ Component, pageProps }: AppProps) {
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
export default MyApp
