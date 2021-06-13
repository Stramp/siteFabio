import * as S from './styles'
import Logo from 'components/assets/Logo'
import TopUtilsBar from 'components/sections/TopUtilsBar'
import Navigation from 'components/assets/Navigation'

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
