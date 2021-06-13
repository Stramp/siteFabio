import dynamic from 'next/dynamic'
import * as S from './styles'

const MainBanner = dynamic(() => import('components/sections/MainBanner'))

const Main = () => {
  return (
    <S.Wrapper>
      <MainBanner />
    </S.Wrapper>
  )
}
export default Main
