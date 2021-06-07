import * as S from './styles'

export type TesteProps = {
  color?: 'mainTxt'
}

const Teste = ({ color = 'mainTxt' }: TesteProps) => (
  <S.Wrapper>
    Teste
  </S.Wrapper>
)

export default Teste
