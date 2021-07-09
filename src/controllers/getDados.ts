export type BannerProps = {
  bannerList: BannerListProps[]
}
export type BannerListProps = {
  titulo: string
  subTitulo: string
  img: string
}
export const getBanners = async () => {
  const url = 'api/dados'
  try {
    const res = await fetch(url)
    const dados = await res.json()
    return dados.bannerList
  } catch (error) {
    console.error('error', error)
  }
}
