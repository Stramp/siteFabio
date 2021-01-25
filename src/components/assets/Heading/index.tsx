import * as S from './styles'

export type HeadingProps = {
  prevTit?: React.ReactNode
  posTit?: React.ReactNode
  sizeLine?: string
}

const Heading = ({
  prevTit = 'Titulo',
  posTit = 'Sessao',
  sizeLine = '75vw'
}: HeadingProps) => (
  <S.Wraper>
    <S.H2>
      {prevTit}
      <S.Span> {posTit}</S.Span>
    </S.H2>
    <S.Div sizeLine={sizeLine} title="lineTitle" />
  </S.Wraper>
)

export default Heading
