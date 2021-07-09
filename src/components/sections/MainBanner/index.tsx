import dynamic from 'next/dynamic'
import * as S from './styles'
const Slider = dynamic(() => import('react-slick'))

export type BannerProps = {
  bannerList?: BannerListProps[]
}
export type BannerListProps = {
  titulo?: string
  subTitulo?: string
  img?: string
}
const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  autoplay: true,
  autoplaySpeed: 8000,
  slidesToShow: 1,
  slidesToScroll: 1
}

const MainBanner = ({ bannerList }: BannerProps) => {
  return (
    <S.Wrapper>
      <div>
        <Slider {...settings}>
          {bannerList?.map(({ titulo, subTitulo, img }, index) => (
            <div key={index}>
              <S.BannerItem img={img}>
                <h3>{titulo}</h3>
                <p>{subTitulo}</p>
              </S.BannerItem>
            </div>
          ))}
        </Slider>
      </div>
    </S.Wrapper>
  )
}

export default MainBanner
