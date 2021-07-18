import Heading from 'components/assets/Heading'
import { DataProps } from 'controllers/getData'
import * as S from './styles'

export type SectionPlansProps = DataProps['plans']

const SectionPlans = ({ prevTit, posTit }: SectionPlansProps) => (
  <S.Wrapper>
    <Heading prevTit={prevTit} posTit={posTit} />
  </S.Wrapper>
)

export default SectionPlans
