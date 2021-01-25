import { useState } from 'react'
import * as S from './styles'

export type NavigationProps = {
  listMenu?: string[]
  hideOn?: boolean
  key?: number
}
const variants = {
  open: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -2 }
  }
}
const variants2 = {
  open: {
    x: 0,
    transition: {
      stiffness: 1000,
      velocity: 1110
    }
  },
  closed: {
    x: 250,
    transition: {
      stiffness: 1000,
      velocity: 1110
    }
  }
}
const sidebar = {
  open: {
    x: 0,
    transition: {
      stiffness: 1000
    }
  },
  closed: {
    x: 450,
    transition: {
      stiffness: 1000,
      delay: 0.5
    }
  }
}
const Navigation = ({
  listMenu = ['item1', 'item2', 'item3', 'item3', 'item3', 'item3', 'item3']
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
      <S.Nav
        initial={false}
        animate={booToggle ? 'open' : 'closed'}
        variants={sidebar}
      >
        <S.Ul variants={variants}>
          {listMenu.map((item, i) => (
            <S.Li
              variants={variants2}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              key={i}
              tabIndex={i}
            >
              <S.A href={'/' + String(item).toLowerCase()}>{item}</S.A>
            </S.Li>
          ))}
        </S.Ul>

        <S.Login>teste</S.Login>
      </S.Nav>
    </S.MenuSection>
  )
}

export default Navigation
