import ButtonCta from 'components/assets/ButtonCta'
import Description from 'components/assets/Description'
import Heading from 'components/assets/Heading'
import * as S from './styles'

export type SectionEbookProps = {
  text?: string
}

const SectionEbook = ({ text = 'mainTxt' }: SectionEbookProps) => {
  return (
    <S.Wrapper>
      <div className="content">
        <Heading prevTit="Baixe meu" posTit="E-BOOK" />
        <Description text={text} />
        <ButtonCta>BAIXAR</ButtonCta>
      </div>
    </S.Wrapper>
  )
}

export default SectionEbook
