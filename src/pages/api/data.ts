import { DataProps } from 'controllers/getData'
import type { NextApiRequest, NextApiResponse } from 'next'

const data: DataProps = {
  accordion: {
    title: 'FAQ',
    list: [
      {
        title: 'Quanto tempo demora para o treino ficar pronto?',
        description:
          'Eu peço 5 dias de prazo. Depois que você preenche a anamnese, eu realizo toda uma análise estratégica do seu caso. Demora um pouquinho, mas o resultado fica impecável – eu garanto!'
      },
      {
        title: 'Preciso renovar o treino em quanto tempo?',
        description: 'Sugiro a renovação dentro de 35-45 dias.'
      },
      {
        title: 'Vou ter que treinar quantas vezes na semana?',
        description:
          'É você quem me diz. A Consultoria Fitness se encaixa na sua realidade. Não importa se você vai treinar 2, 3 ou 6 vezes na semana… eu organizo toda a estratégia – com o número de estímulos ideal – para você conquistar seus objetivos treino após treino.'
      },
      {
        title: 'Como vou acessar meu treino?',
        description:
          'Seu treino ficará disponível no seu perfil dentro do site, desenhado exclusivamente para o meu programa de Consultoria Fitness. Por lá, além de acessar o seu treino, você terá todos os vídeos e materiais de apoio do meu método. É possível utilizar um app de treino no qual é possível visualizar tudo por lá!'
      },
      {
        title: 'Como vou executar os exercícios do jeito certo?',
        description:
          'Além do treino personalizado, eu te ofereço a explicação passo a passo para você executá-lo de forma impecável. E mais do que isso, você terá meu Whatsapp pessoal para sanar quaisquer dúvidas que tiver. Estaremos juntos – durante todo o processo – nessa parceria imbatível!'
      }
    ]
  },
  listBanner: [
    {
      titulo: 'Mais de 13 anos',
      subTitulo: 'em Assessoria Fitness',
      img: 'https://user-images.githubusercontent.com/78149085/124521820-4cb39500-ddc7-11eb-8a8d-6c0bcb6bd572.png'
    },
    {
      titulo: 'DIFERENCIAL',
      subTitulo:
        'Método baseado nas suas características individuais e estilo de vida. Com ampla base científica',
      img: 'https://user-images.githubusercontent.com/78149085/124521730-fd6d6480-ddc6-11eb-9ea6-9eb464bb60a3.png'
    },
    {
      titulo: 'Mais de 500 casos de sucesso!',
      subTitulo: 'Venha conhecer a metodologia!',
      img: 'https://user-images.githubusercontent.com/78149085/124521904-943a2100-ddc7-11eb-8d8f-f81b8afa00a9.png'
    },
    {
      titulo: 'Satisfação garantida',
      subTitulo: 'ou seu dinheiro de volta consulte as condições.',
      img: 'https://user-images.githubusercontent.com/78149085/124521751-0bbb8080-ddc7-11eb-9386-8ab9697d5665.png'
    },
    {
      titulo: 'Atendimento!',
      subTitulo: 'Online e Presencial',
      img: 'https://user-images.githubusercontent.com/78149085/124521875-7cfb3380-ddc7-11eb-90ea-038cff554047.png'
    }
  ]
}
export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(data)
}
