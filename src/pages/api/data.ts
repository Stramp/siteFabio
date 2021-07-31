import { DataProps } from 'controllers/getData'
import type { NextApiRequest, NextApiResponse } from 'next'

const data: DataProps = {
  accordion: {
    prevTit: 'FAQ',
    posTit: '(DÚVIDAS)',
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
  main: {
    description: `
    <p>Você já se deparou com aquelas pessoas que treinam por anos e anos e estão sempre do mesmo jeito?<br>
    Não emagrecem, não ficam com os músculos aparentes e não mudam! Já aconteceu isso com você?</p>
    <br>
    <ul style="margin-left: 2.8rem;">
      <li>Está processo de emagrecimento estagnado?</li>
      <li>Não consegue ganhar massa muscular?</li>
      <li>Não evolui no treino e no ganho de força e resistência?</li>
    </ul>
    <br>
    <p>Olha só: Se tem uma coisa que posso te garantir, é que o corpo humano, quando recebe os estímulos certos, vai necessariamente se adaptar! Em teoria do treinamento chamamos isso de princípio da adaptabilidade.</p>
    <br>
    <p>Mas se não for considerado as suas características individuais, como condição de saúde, nível de treinamento, sono, hábitos, preferencias, rotina de trabalho, alimentação, entre outros, dificilmente terá resultados, podendo ainda prejudicar o seu rendimento, desenvolver uma lesão e desanimar no meio do processo.</p>
    <br>
    <p>A minha proposta é oferecer uma consultoria individualizada, te entregando o que há de mais atual na ciência do treinamento e nutrição esportiva e obviamente considerando todas as suas características individuais para que você conquiste a saúde e o corpo que tanto deseja.</p>`,
    listBanner: [
      {
        titulo: 'Mais de 13 anos',
        subTitulo: 'em Assessoria Fitness',
        img: 'https://images.unsplash.com/photo-1550345332-09e3ac987658?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1334&q=80'
      },
      {
        titulo: 'DIFERENCIAL',
        subTitulo:
          'Método baseado nas suas características individuais e estilo de vida. Com ampla base científica',
        img: 'https://images.unsplash.com/photo-1579758682665-53a1a614eea6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1334&q=80'
      },
      {
        titulo: 'Mais de 500 casos de sucesso!',
        subTitulo: 'Venha conhecer a metodologia!',
        img: 'https://images.unsplash.com/photo-1567598508481-65985588e295?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
      },
      {
        titulo: 'Satisfação garantida',
        subTitulo: 'ou seu dinheiro de volta consulte as condições.',
        img: 'https://images.unsplash.com/photo-1577221084712-45b0445d2b00?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1343&q=80'
      },
      {
        titulo: 'Atendimento!',
        subTitulo: 'Online e Presencial',
        img: 'https://images.unsplash.com/photo-1597452485677-d661670d9640?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1332&q=80'
      }
    ]
  },
  steps: {
    prevTit: '5',
    posTit: 'passos',
    stepsList: [
      {
        img: 'https://picsum.photos/400/100?random=1',
        txt: 'Escolha o melhor plano de consultoria para você'
      },
      {
        img: 'https://picsum.photos/500/300?random=2',
        txt: 'Entre em contato diretamente comigo via whatsapp'
      },
      {
        img: 'https://picsum.photos/500/200?random=3',
        txt: 'Batemos um papo para eu analisar seu caso individual'
      },
      {
        img: 'https://picsum.photos/400/100?random=4',
        txt: 'Definir treino e alimentação'
      },
      {
        img: 'https://picsum.photos/400/100?random=5',
        txt: 'Começar a treinar com foco e dedicação contando com meu apoio e instruções'
      }
    ]
  },
  plans: {
    prevTit: 'Nossos',
    posTit: 'Planos',
    listPlans: [
      {
        id: 'st',
        uri: 'https://images.unsplash.com/photo-1549476464-37392f717541?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        price: '197,00',
        title: 'Start',
        planTime: 'mensal',
        list: [
          '1 Programa de treino personalizado',
          'Suporte exclusivo c/ Fabio Morelli por Whatsapp',
          'KIT LIFESTYLE '
        ],
        pointOfInterest: 0,
        backgroundColor: 'red'
      },
      {
        id: 'tt',
        uri: 'https://images.unsplash.com/photo-1539794830467-1f1755804d13?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80',
        price: '397,00',
        title: 'TRANSFORMAÇÃO TOTAL',
        planTime: 'TRIMESTRAL',
        list: [
          '3 Programas de treino personalizado',
          'Programa The Habit Code! Curso completo com Carlos Araújo',
          'Suporte exclusivo c/ Fabio Morelli por Whatsapp',
          'KIT LIFESTYLE'
        ],
        pointOfInterest: 80,
        backgroundColor: '#000'
      },
      {
        id: 'ev',
        uri: 'https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=966&q=80',
        price: '697,00',
        title: 'ESTILO DE VIDA',
        planTime: 'SEMESTRAL',
        list: [
          '6 programas de treino personalizado',
          'Programa The Habit Code! Curso completo com Carlos Araújo',
          'Suporte exclusivo c/ Fabio Morelli por Whatsapp',
          'KIT LIFESTYLE'
        ],
        pointOfInterest: 0,
        backgroundColor: '#000'
      }
    ]
  }
}
export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(data)
}
