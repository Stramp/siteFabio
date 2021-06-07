import * as S from './styles'
import Navigation from 'components/assets/Navigation'
import TopUtilsBar from 'components/sections/TopUtilsBar'
import Logo from 'components/assets/Logo'

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
