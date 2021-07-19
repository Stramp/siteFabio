import { AccordionItemProps } from 'components/Accordion'
import { BoxDiferenciaisItemsProps } from 'components/assets/BoxDiferenciais'
import { CardProps } from 'components/CardPage'
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
    prevTit: string
    posTit: string
    list: AccordionItemProps['item'][]
  }
  main: {
    description: string
    listBanner: BannerListProps[]
  }
  steps: {
    prevTit: string
    posTit: string
    stepsList: BoxDiferenciaisItemsProps[]
  }
  plans: {
    prevTit: string
    posTit: string
    listPlans?: CardProps[]
  }
}
