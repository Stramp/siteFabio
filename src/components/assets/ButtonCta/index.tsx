import * as S from './styles'

export type ButtonCtaProps = {
  children: React.ReactNode
  index?: number
}

const ButtonCta = ({ children = 'teste', index = 150 }: ButtonCtaProps) => {
  const handler = (et: number) => {
    console.log('eae ? ', et)
    window.scrollTo({
      top: et,
      behavior: 'smooth'
    })
  }
  return (
    <S.Wrapper
      whileHover={{ scale: 1.3 }}
      transition={{ duration: 0.5 }}
      onClick={() => handler(index)}
    >
      {children}
    </S.Wrapper>
  )
}
export default ButtonCta
