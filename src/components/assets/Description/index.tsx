import { useState } from 'react'
import * as S from './styles'

export type DescriptionProps = {
  text?: string
}

const Description = ({ text = 'texto de descrição' }: DescriptionProps) => {
  const [hideOnButton, sethideOnButton] = useState(false)
  const handleButton = () => {
    sethideOnButton(!hideOnButton)
  }
  return (
    <S.Div>
      <S.P>
        {!hideOnButton ? text.substring(0, 180) + '...' : text}
        {!hideOnButton ? (
          <S.Button onClick={handleButton}>Saiba Mais</S.Button>
        ) : (
          <S.Button onClick={handleButton}>Recolher</S.Button>
        )}
      </S.P>
    </S.Div>
  )
}

export default Description
