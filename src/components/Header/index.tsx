import dynamic from 'next/dynamic'
import * as S from './styles'

const Logo = dynamic(() => import('components/assets/Logo'))
const Navigation = dynamic(() => import('components/assets/Navigation'))
const TopUtilsBar = dynamic(() => import('components/sections/TopUtilsBar'))

const Header = () => (
  <S.Wrapper>
    <TopUtilsBar />
    <div className="logo">
      <Logo />
    </div>
    <Navigation />
  </S.Wrapper>
)

export default Header
