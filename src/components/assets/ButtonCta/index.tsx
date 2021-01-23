import * as S from './styles'

export type ButtonCtaProps = {
  children: React.ReactNode
}

const ButtonCta = ({ children = 'teste' }: ButtonCtaProps) => (
  <S.Wrapper>{children}</S.Wrapper>
)

export default ButtonCta
