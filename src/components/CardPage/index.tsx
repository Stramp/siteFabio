import { motion } from 'framer-motion'
import { Dispatch, SetStateAction } from 'react'
import * as S from './styles'

export type CardPageProps = {
  selectedItem?: CardProps
  setSelectedItem?: Dispatch<SetStateAction<CardProps | null>>
}
export type CardProps = {
  id?: string
  uri?: string
  price?: string
  title?: string
  planTime?: string
  list?: string[]
  pointOfInterest?: number
  backgroundColor?: string
}

const CardPage = ({ selectedItem, setSelectedItem }: CardPageProps) => (
  <S.Wrapper uri={selectedItem?.uri}>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.15 } }}
      transition={{ duration: 0.2, delay: 0.15 }}
      style={{ pointerEvents: 'auto' }}
      className="overlay"
      onClick={(e) => {
        console.log('fecha carai', e.target)
        console.log('fecha carai2', e.currentTarget)
        setSelectedItem(null)
      }}
    ></motion.div>
    <div className="card-content-container open">
      <motion.div
        className="card-content"
        layoutId={`card-container-${selectedItem?.id}`}
      >
        <motion.div
          className="card-image-container"
          layoutId={`card-image-container-${selectedItem?.id}`}
        />
        <motion.div
          className="title-container"
          layoutId={`title-container-${selectedItem?.id}`}
        >
          <span className="category">{selectedItem?.planTime}</span>
          <h2>{selectedItem?.title}</h2>
        </motion.div>
        <motion.div className="content-container" animate>
          <p>teste teste teste</p>
          <p>teste teste teste</p>
          <p>teste teste teste</p>
          <br />
          <p>teste teste teste</p>
          <p>teste teste teste</p>
          <p>teste teste teste</p>
        </motion.div>
      </motion.div>
    </div>
  </S.Wrapper>
)

export default CardPage
