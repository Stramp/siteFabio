import * as S from './styles'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
//import { ContentPlaceholder } from './ContentPlaceholder'
type AccordionItemProps = {
  item: {
    id: number | false
    title: string
    description: string
  }
  expanded: number | false
  setExpanded: React.Dispatch<React.SetStateAction<number | false>>
}
const AccordionItem = ({ item, expanded, setExpanded }: AccordionItemProps) => {
  const isOpen = item.id === expanded

  // By using `AnimatePresence` to mount and unmount the contents, we can animate
  // them in and out while also only rendering the contents of open accordionItems
  return (
    <>
      <AnimatePresence initial={false}>
        <li>
          <article>
            <motion.h3
              initial={false}
              animate={{ color: isOpen ? '#fff' : '#a0a0a0' }}
              onClick={() => setExpanded(isOpen ? false : item.id)}
            >
              {item.title}
              <motion.div
                className="arrow"
                animate={{ rotate: isOpen ? '45deg' : '-45deg' }}
              ></motion.div>
            </motion.h3>
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
const listItems = [
  {
    title: 'teste',
    description:
      'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado.'
  },
  {
    title: 'teste1',
    description:
      'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado.1'
  },
  {
    title: 'teste2',
    description:
      'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado.2'
  },
  {
    title: 'teste3',
    description:
      'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado.3'
  }
]
export const Accordion = () => {
  const [expanded, setExpanded] = useState<false | number>(0)
  return (
    <S.Wrapper>
      {listItems.map((item, index) => (
        <AccordionItem
          key={index}
          item={{ ...item, id: index }}
          expanded={expanded}
          setExpanded={setExpanded}
        />
      ))}
    </S.Wrapper>
  )
}

export default Accordion
