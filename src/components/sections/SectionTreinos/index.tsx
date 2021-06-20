import BoxDiferenciais from 'components/assets/BoxDiferenciais'
import ButtonCta from 'components/assets/ButtonCta'
import Heading from 'components/assets/Heading'
import * as S from './styles'

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
    txt: "Lorem Ipsum is simply dummy text of the printing and typebeen the industry's standard dummy text ever sinces been the industry's"
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
      <BoxDiferenciais list={diferenciaisList} />
      <ButtonCta>Ver Planos</ButtonCta>
    </S.Wrapper>
  )
}

export default SectionTreinos
