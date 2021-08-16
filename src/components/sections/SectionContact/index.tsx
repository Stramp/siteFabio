import Heading from 'components/assets/Heading'
import BoxContact from 'components/BoxContact'
import FormWhats from 'components/FormWhats'
import * as S from './styles'

export type SectionContactProps = {
  color?: 'mainTxt'
}

const SectionContact = () => (
  <S.Wrapper>
    <Heading prevTit="Faça" posTit="contato" />
    <S.BoxContainer>
      <BoxContact tipo="email" />
      <BoxContact tipo="tel" />
    </S.BoxContainer>
    <FormWhats />
  </S.Wrapper>
)

export default SectionContact
