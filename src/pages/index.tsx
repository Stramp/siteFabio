import dynamic from 'next/dynamic'
import { Container } from 'components/assets/Container'
import Header from 'components/Header'

const Footer = dynamic(() => import('components/Footer'))
const Main = dynamic(() => import('components/Main'))

export default function Index() {
  return (
    <Container>
      <Header />
      <Main />
      <Footer />
    </Container>
  )
}
