import { useState } from 'react'
import * as S from './styles'

export type DescriptionProps = {
  text?: string
  size?: number
}

const Description = ({
  text = 'texto de descrição',
  size = 180
}: DescriptionProps) => {
  const [hideOnButton, sethideOnButton] = useState(false)
  const handleButton = () => {
    sethideOnButton(!hideOnButton)
  }

  const DescriptionWithMore = () => {
    const textHtml = (hOb: boolean) => {
      if (hOb) {
        return text.substring(0, size) + '...'
      } else {
        return text
      }
    }
    return (
      <>
        <S.P
          dangerouslySetInnerHTML={{
            __html: textHtml(!hideOnButton)
          }}
        />

        {!hideOnButton ? (
          <S.Button onClick={handleButton}>Saiba Mais</S.Button>
        ) : (
          <S.Button onClick={handleButton}>Recolher</S.Button>
        )}
      </>
    )
  }
  const DescriptionNoMore = () => (
    <S.P
      dangerouslySetInnerHTML={{
        __html: text
      }}
    />
  )

  return (
    <S.Div>
      {text.length > size ? <DescriptionWithMore /> : <DescriptionNoMore />}
    </S.Div>
  )
}

export default Description
