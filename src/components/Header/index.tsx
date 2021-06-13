import dynamic from 'next/dynamic'
import * as S from './styles'
import Logo from 'components/assets/Logo'
import TopUtilsBar from 'components/sections/TopUtilsBar'
const Navigation = dynamic(() => import('components/assets/Navigation'))

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
