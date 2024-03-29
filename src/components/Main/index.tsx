import SectionTreinos from 'components/sections/SectionTreinos'
import MainBanner from 'components/sections/MainBanner'
import * as S from './styles'
import SectionEbook from 'components/sections/SectionEbook'
import SectionCoach from 'components/sections/SectionCoach'
import SectionArticles from 'components/sections/SectionArticles'
import { useEffect, useState } from 'react'
import { getData, DataProps } from 'controllers/getData'
import SectionPlans from 'components/sections/SectionPlans'
import SectionContact from 'components/sections/SectionContact'

const Main = () => {
  const [dataList, setDataList] = useState<DataProps>()
  useEffect(() => {
    ;(async () => {
      const dados: DataProps = await getData()
      console.log('dados > ', dados)
      setDataList(dados)
    })()
  }, [])

  return (
    <S.Wrapper>
      <MainBanner
        bannerList={dataList?.main.listBanner}
        text={dataList?.main.description}
      />
      <SectionTreinos
        prevTit={dataList?.steps.prevTit}
        posTit={dataList?.steps.posTit}
        stepsList={dataList?.steps.stepsList}
      />
      <SectionPlans
        prevTit={dataList?.plans.prevTit}
        posTit={dataList?.plans.posTit}
        listPlans={dataList?.plans.listPlans}
      />
      <SectionEbook text="Muito bem! Então salvei o arquivo HTML e esse CSS de planos também já está pronto, basta vir aqui no cabeçalho e colocar “link href=”css/planos.css” ”. Vou colocar o “rel=”stylesheet” ”. Salvei o HTML, agora vamos ver como é que ficou no nosso navegador. Então eu vou voltar aqui, recarreguei o navegador, desci e agora o “planos” está pronto." />
      <SectionCoach />
      <SectionArticles
        listItems={dataList?.accordion.list}
        prevTit={dataList?.accordion.prevTit}
        posTit={dataList?.accordion.posTit}
      />
      <SectionContact />
    </S.Wrapper>
  )
}
export default Main
