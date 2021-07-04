import type { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({
    bannerList: [
      {
        titulo: 'Mais de 13 anos',
        subTitulo: 'em Assessoria Fitness',
        img: 'https://picsum.photos/800/600?random=1'
      },
      {
        titulo: 'DIFERENCIAL',
        subTitulo:
          'Método baseado nas suas características individuais e estilo de vida. Com ampla base científica',
        img: 'https://picsum.photos/800/600?random=2'
      },
      {
        titulo: 'Mais de 500 casos de sucesso!',
        subTitulo: 'Venha conhecer a metodologia!',
        img: 'https://picsum.photos/800/600?random=3'
      },
      {
        titulo: 'Satisfação garantida',
        subTitulo: 'ou seu dinheiro de volta consulte as condições.',
        img: 'https://picsum.photos/800/600?random=4'
      }
    ]
  })
}
