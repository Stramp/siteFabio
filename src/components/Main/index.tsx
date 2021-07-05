import SectionTreinos from 'components/sections/SectionTreinos'
import MainBanner from 'components/sections/MainBanner'
import * as S from './styles'
import SectionEbook from 'components/sections/SectionEbook'
import SectionCoach from 'components/sections/SectionCoach'
import SectionArticles from 'components/sections/SectionArticles'
import SectionContact from 'components/sections/SectionContact'

const Main = () => {
  return (
    <S.Wrapper>
      <MainBanner />
      <SectionTreinos />
      <SectionEbook text="Muito bem! Então salvei o arquivo HTML e esse CSS de planos também já está pronto, basta vir aqui no cabeçalho e colocar “link href=”css/planos.css” ”. Vou colocar o “rel=”stylesheet” ”. Salvei o HTML, agora vamos ver como é que ficou no nosso navegador. Então eu vou voltar aqui, recarreguei o navegador, desci e agora o “planos” está pronto." />
      <SectionCoach />
      <SectionArticles />
      <SectionContact />
    </S.Wrapper>
  )
}
export default Main
