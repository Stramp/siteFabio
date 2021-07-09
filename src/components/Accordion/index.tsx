import * as S from './styles'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
//import { ContentPlaceholder } from './ContentPlaceholder'
export type AccordionItemProps = {
  id: number | false
  item: {
    title: string
    description: string
  }
  expanded?: number | false
  setExpanded: React.Dispatch<React.SetStateAction<number | false>>
}
const AccordionItem = ({
  item,
  expanded,
  setExpanded,
  id
}: AccordionItemProps) => {
  const isOpen = id === expanded
  return (
    <>
      <AnimatePresence initial={false}>
        <li>
          <article>
            <div>
              <motion.h3
                initial={false}
                animate={{ color: isOpen ? '#fff' : '#a0a0a0' }}
                onClick={() => setExpanded(isOpen ? false : id)}
              >
                {item.title}
              </motion.h3>
              <motion.div
                className="arrow"
                animate={{ rotate: isOpen ? '45deg' : '-45deg' }}
              ></motion.div>
            </div>
            <motion.div
              key="content"
              initial="collapsed"
              animate={isOpen ? 'open' : 'collapsed'}
              exit="collapsed"
              variants={{
                open: {
                  scale: 1,
                  opacity: 1,
                  height: 'auto',
                  overflow: 'auto'
                },
                collapsed: {
                  scale: 0.8,
                  opacity: 0,
                  height: 0,
                  overflow: 'hidden'
                }
              }}
              transition={{ duration: 0.5 }}
            >
              <p>{item.description}</p>
            </motion.div>
          </article>
        </li>
      </AnimatePresence>
    </>
  )
}

export type AccordionProps = {
  listItems?: AccordionItemProps['item'][]
}

export const Accordion = ({ listItems }: AccordionProps) => {
  const [expanded, setExpanded] = useState<false | number>(0)
  return (
    <S.Wrapper>
      {listItems?.map((item, index) => (
        <AccordionItem
          key={index}
          id={index}
          item={item}
          expanded={expanded}
          setExpanded={setExpanded}
        />
      ))}
    </S.Wrapper>
  )
}

export default Accordion
