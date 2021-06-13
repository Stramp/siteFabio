import BoxDiferenciais from 'components/assets/BoxDiferenciais'
import ButtonCta from 'components/assets/ButtonCta'
import Description from 'components/assets/Description'
import Heading from 'components/assets/Heading'
import * as S from './styles'

const textFic =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
const diferenciaisList = [
  {
    img: 'https://picsum.photos/400/100?random=1',
    txt: 'Lorem Ipsum is simply dummy text of the printing and typesetting d dummy text ever since the 1500s,'
  },
  {
    img: 'https://picsum.photos/500/300?random=2',
    txt: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ,'
  },
  {
    img: 'https://picsum.photos/500/200?random=3',
    txt: "Lorem Ipsum is simply dummy text of the printing and typebeen the industry's standard dummy text ever sinces been the industry's standard dummy text ever since the 1500s"
  },
  {
    img: 'https://picsum.photos/400/100?random=4',
    txt: "Lorem Ipsum is simply dummy text of the printing and . Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
  }
]

const SectionTreinos = () => {
  return (
    <S.Wrapper>
      <Heading prevTit="Nossos" posTit="Treinos" />
      <Description text={textFic} />
      <BoxDiferenciais list={diferenciaisList} />
      <ButtonCta>Ver Planos</ButtonCta>
    </S.Wrapper>
  )
}

export default SectionTreinos
