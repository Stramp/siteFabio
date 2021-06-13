import dynamic from 'next/dynamic'
import { Container } from 'components/assets/Container'

const Footer = dynamic(() => import('components/Footer'))
const Header = dynamic(() => import('components/Header'))
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
