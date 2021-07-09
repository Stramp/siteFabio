import { AccordionItemProps } from 'components/Accordion'
import { BannerListProps } from 'components/sections/MainBanner'

export const getData = async () => {
  const uri = 'api/data'
  try {
    const res = await fetch(uri)
    const dados = await res.json()
    console.log('dados em get', dados)
    return dados
  } catch (error) {
    console.error('error', error)
  }
}
export type DataProps = {
  accordion: {
    title: string
    list: AccordionItemProps['item'][]
  }
  main: {
    description: string
    listBanner: BannerListProps[]
  }
}
