import { useState } from 'react'
import * as S from './styles'

export type NavigationProps = {
  listMenu?: string[]
  hideOn?: boolean
}

const Navigation = ({
  listMenu = ['item1', 'item2', 'item3', 'item3', 'item3']
}: NavigationProps) => {
  const [booToggle, setBooToggle] = useState(false)
  function handToggle() {
    return setBooToggle(!booToggle)
  }
  return (
    <S.MenuSection>
      <S.MenuToggle onClick={handToggle}>
        <S.Dash1 hideOn={booToggle} />
        <S.Dash2 hideOn={booToggle} />
        <S.Dash3 hideOn={booToggle} />
      </S.MenuToggle>
      <S.Nav hideOn={booToggle}>
        <S.Ul>
          {listMenu.map((item, i) => {
            return (
              <S.Li key={i}>
                <S.A href={'/' + String(item).toLowerCase()}>{item}</S.A>
              </S.Li>
            )
          })}
        </S.Ul>
      </S.Nav>
    </S.MenuSection>
  )
}

export default Navigation
