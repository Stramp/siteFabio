import SectionTreinos from 'components/sections/SectionTreinos'
import MainBanner from 'components/sections/MainBanner'
import * as S from './styles'

const Main = () => {
  return (
    <S.Wrapper>
      <MainBanner />
      <SectionTreinos />
    </S.Wrapper>
  )
}
export default Main
