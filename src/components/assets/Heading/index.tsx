import * as S from './styles'

export type HeadingProps = {
  prevTit: React.ReactNode
  posTit: React.ReactNode
  sizeLine?: string
}

const Heading = ({ prevTit, posTit, sizeLine = '75vw' }: HeadingProps) => (
  <S.wraper>
    <S.h2>
      {prevTit}
      <S.span> {posTit}</S.span>
    </S.h2>
    <S.div sizeLine={sizeLine} />
  </S.wraper>
)

export default Heading
