import * as S from './styles'
import Header from '../Header'

const Main = ({ title = 'Fabio Morelli', description = 'descrição e ae' }) => (
  <S.Wrapper>
    <Header />
    <h1>{title}</h1>
    <S.Descriptions>{description}</S.Descriptions>
  </S.Wrapper>
)

export default Main
