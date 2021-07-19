import Heading, { HeadingProps } from 'components/assets/Heading'
import { CardProps } from 'components/CardPage'
import Cards from 'components/Cards'
import * as S from './styles'

export interface SectionPlansProps extends HeadingProps {
  listPlans: CardProps[]
}

const SectionPlans = ({ prevTit, posTit, listPlans }: SectionPlansProps) => (
  <S.Wrapper>
    <Heading prevTit={prevTit} posTit={posTit} />
    <Cards listPlans={listPlans} />
  </S.Wrapper>
)

export default SectionPlans
