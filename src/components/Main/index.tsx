import * as S from './styles'

const Main = ({ title = 'Fabio Morelli', description = 'descrição' }) => (
  <S.Wrapper>
    <h1>{title}</h1>
    <p>{description}</p>
  </S.Wrapper>
)

export default Main
