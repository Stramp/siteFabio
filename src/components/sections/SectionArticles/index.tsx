import Accordion, { AccordionItemProps } from 'components/Accordion'
import Heading, { HeadingProps } from 'components/assets/Heading'
import * as S from './styles'

export interface AccordionSectionProps extends HeadingProps {
  listItems?: AccordionItemProps['item'][]
}

const SectionArticles = ({
  listItems,
  prevTit,
  posTit
}: AccordionSectionProps) => (
  <S.Wrapper>
    <Heading prevTit={prevTit} posTit={posTit} />
    <Accordion listItems={listItems} />
  </S.Wrapper>
)

export default SectionArticles
