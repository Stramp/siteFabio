import Description from 'components/assets/Description'
import Heading from 'components/assets/Heading'
import * as S from './styles'

const SectionTreinos = () => {
  const textFic =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  return (
    <S.Wrapper>
      <Heading prevTit="Nossos" posTit="Treinos" />
      <Description text={textFic} />
    </S.Wrapper>
  )
}

export default SectionTreinos
