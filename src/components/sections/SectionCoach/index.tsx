import Description from 'components/assets/Description'
import Heading from 'components/assets/Heading'
import * as S from './styles'

export type SectionCoachProps = {
  text?: string
}

const SectionCoach = ({
  text = 'Rodando esse código, agora só precisamos arrumar aqui a identação. E qual é o título? Conheça nossos produtos. '
}: SectionCoachProps) => (
  <S.Wrapper>
    <Heading prevTit="Conheça o" posTit="Treinador" />
    <Description text={text} />
    <div className="container-img">
      <S.Moldura />
      <img
        src="https://picsum.photos/250/250?random=657"
        alt="Professor exibindo seus resultados"
      />
    </div>
    <Description text="Rodando esse código, agora só precisamos arrumar aqui a identação. E qual é o título? Conheça nossos produtosRodando esse código, agora só precisamos arrumar aqui a identação. E qual é o título? Conheça nossos produtos" />
  </S.Wrapper>
)

export default SectionCoach
