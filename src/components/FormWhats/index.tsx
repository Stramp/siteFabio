import ButtonCta from 'components/assets/ButtonCta'
import * as S from './styles'

export type FormWhatsProps = {
  color?: string
}

const FormWhats = ({ color = 'whatsmsg' }: FormWhatsProps) => (
  <S.Wrapper>
    <textarea
      placeholder="Digite aqui sua menssagem e fale direto comigo."
      name={color}
      id="whatsmsg"
      rows={10}
    ></textarea>
    <ButtonCta>WhatsApp</ButtonCta>
  </S.Wrapper>
)

export default FormWhats
