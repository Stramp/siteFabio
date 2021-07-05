import WhatsappLogo from 'components/assets/WhatsappLogo'
import * as S from './styles'

export type BoxContactProps = {
  color?: 'mainTxt'
}

const BoxContact = () => (
  <S.Wrapper>
    <WhatsappLogo />
    BoxContact
  </S.Wrapper>
)

export default BoxContact
