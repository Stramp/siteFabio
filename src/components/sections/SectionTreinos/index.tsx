import BoxDiferenciais, {
  BoxDiferenciaisItemsProps
} from 'components/assets/BoxDiferenciais'
import ButtonCta from 'components/assets/ButtonCta'
import Heading, { HeadingProps } from 'components/assets/Heading'
import * as S from './styles'
export interface SectionTreinosProps extends HeadingProps {
  stepsList?: BoxDiferenciaisItemsProps[]
}

const SectionTreinos = ({
  stepsList,
  prevTit,
  posTit
}: SectionTreinosProps) => {
  return (
    <S.Wrapper>
      <Heading prevTit={prevTit} posTit={posTit} />
      <BoxDiferenciais list={stepsList} />
      <ButtonCta>Ver Planoss</ButtonCta>
    </S.Wrapper>
  )
}

export default SectionTreinos
