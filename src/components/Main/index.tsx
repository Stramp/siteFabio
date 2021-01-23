import * as S from './styles'
import Header from '../Header'
import Heading from '../assets/Heading'
import Description from '../assets/Description'

const Main = ({ description = 'descrição e ae' }) => {
  return (
    <S.Wrapper>
      <Header />
      <Heading prevTit="A Ciencia do" posTit="Corpo" sizeLine="68%" />
      <Description text={description} />
    </S.Wrapper>
  )
}

export default Main
