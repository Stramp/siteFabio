import dynamic from 'next/dynamic'
import * as S from './styles'
const Slider = dynamic(() => import('react-slick'))

const settings = {
  dots: true,
  infinite: true,
  speed: 3000,
  autoplay: true,
  autoplaySpeed: 6000,
  slidesToShow: 1,
  slidesToScroll: 1
}

const MainBanner = () => (
  <S.Wrapper>
    <div>
      <Slider {...settings}>
        <div>
          <div className="banner-item">
            <h3>#HARDWORK</h3>
            <p>treino duro</p>
          </div>
        </div>
        <div>
          <div className="banner-item">
            <h3>healthStyle</h3>
            <p>treino duro</p>
          </div>
        </div>
      </Slider>
    </div>
  </S.Wrapper>
)

export default MainBanner
