import ButtonCta from 'components/assets/ButtonCta'
import { CardProps } from 'components/CardPage'
import { motion } from 'framer-motion'
import { Dispatch, SetStateAction } from 'react'
import * as S from './styles'

export type CardsListProps = {
  list?: CardProps[]
  setSelectedItem: Dispatch<SetStateAction<CardProps | null>>
}

const CardsList = ({ list, setSelectedItem }: CardsListProps) => (
  <S.Wrapper>
    {list?.map((item) => (
      <li
        key={item.id}
        className={`card`}
        onClick={() => {
          console.log('abre carai')
          setSelectedItem(item)
        }}
      >
        <S.CardClosed uri={item.uri}>
          <motion.div
            className="card-content"
            layoutId={`card-container-${item.id}`}
          >
            <motion.div
              className="card-image-container"
              layoutId={`card-image-container-${item.id}`}
            />
            <motion.div
              className="title-container"
              layoutId={`title-container-${item.id}`}
            >
              <div>
                <span className="category">{item.planTime}</span>
                <h2>{item.title}</h2>
              </div>
              <ul>
                {item.list?.map((subItem) => (
                  <li key={'subItem-' + item.id}>{subItem}</li>
                ))}
              </ul>
              <ButtonCta>Ver esse</ButtonCta>
            </motion.div>
          </motion.div>
        </S.CardClosed>
      </li>
    ))}
  </S.Wrapper>
)

export default CardsList
