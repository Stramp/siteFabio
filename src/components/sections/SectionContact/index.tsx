import Heading from 'components/assets/Heading'
import BoxContact from 'components/BoxContact'
import * as S from './styles'

export type SectionContactProps = {
  color?: 'mainTxt'
}

const SectionContact = () => (
  <S.Wrapper>
    <Heading prevTit="Faça" posTit="contato" />
    <S.Container>
      <BoxContact />
      <BoxContact />
      <BoxContact />
    </S.Container>
  </S.Wrapper>
)

export default SectionContact
