import CardPage, { CardProps } from 'components/CardPage'
import CardsList from 'components/CardsList'
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import { useState } from 'react'

export type CardsProps = {
  listPlans?: CardProps[]
}

const Cards = ({ listPlans }: CardsProps) => {
  const [selectedItem, setSelectedItem] = useState<CardProps | null>(null)

  return (
    <AnimateSharedLayout type="crossfade">
      <CardsList list={listPlans} setSelectedItem={setSelectedItem} />
      <AnimatePresence>
        {selectedItem && (
          <CardPage
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
          />
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  )
}

export default Cards
