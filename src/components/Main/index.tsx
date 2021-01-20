import * as S from './styles'
import Header from '../Header'
import Heading from '../assets/Heading'

const Main = ({ description = 'descrição e ae' }) => {
  return (
    <S.Wrapper>
      <Header />
      <Heading prevTit="A Ciencia do" posTit="Corpo" sizeLine="68%" />
      <S.Descriptions>{description}</S.Descriptions>
    </S.Wrapper>
  )
}

export default Main
