import Head from 'next/head'

type Props = {
  title: string
}

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fabio Morelli Trainer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      teste
    </div>
  )
}
