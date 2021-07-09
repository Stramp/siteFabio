import type { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({
    bannerList: [
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
  })
}
