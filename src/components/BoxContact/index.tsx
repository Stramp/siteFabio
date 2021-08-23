import EmailLogo from 'components/assets/EmailLogo'
import TelefoneLogo from 'components/assets/TelefoneLogo'
import * as S from './styles'

export type BoxContactProps = {
  tipo?: string
}

const BoxContact = ({ tipo = 'email' }) => (
  <S.Wrapper>{tipo === 'email' ? Email() : Tel()}</S.Wrapper>
)
const Tel = () => (
  <>
    <TelefoneLogo size="35px" />
    <S.Content>
      <h4>Telefone</h4>
      <p>+55 11 99999-9999</p>
    </S.Content>
  </>
)
const Email = () => (
  <>
    <EmailLogo size="35px" />
    <S.Content>
      <h4>Email</h4>
      <p>teste@teste.com</p>
    </S.Content>
  </>
)

export default BoxContact
