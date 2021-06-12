import Slider from 'react-slick'
import * as S from './styles'

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1
}

const MainBanner = () => (
  <S.Wrapper>
    <div>
      <Slider {...settings}>
        <div>
          <div className="banner-item">
            <h3>titulo</h3>
            <p>treino duro</p>
          </div>
        </div>
        <div>
          <div className="banner-item">
            <h3>titulo</h3>
            <p>treino duro</p>
          </div>
        </div>
      </Slider>
    </div>
  </S.Wrapper>
)

export default MainBanner
