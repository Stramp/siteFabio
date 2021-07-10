import * as S from './styles'
export type BoxDiferenciaisItemsProps = { img: string; txt?: string }

export type BoxDiferenciaisProps = {
  list?: BoxDiferenciaisItemsProps[]
}
const BoxDiferenciais = ({ list }: BoxDiferenciaisProps) => {
  return (
    <S.Wrapper>
      <ol>
        {list?.map(({ txt, img }, index) => (
          <S.ItemList key={index} img={img}>
            <h5>{index + 1}</h5>
            <p>{txt}</p>
          </S.ItemList>
        ))}
      </ol>
    </S.Wrapper>
  )
}

export default BoxDiferenciais
