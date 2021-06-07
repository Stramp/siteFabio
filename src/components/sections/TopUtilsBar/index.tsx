import FacebookLogo from 'components/assets/FacebookLogo'
import InstaLogo from 'components/assets/InstaLogo'
import * as S from './styles'

const TopUtilsBar = () => {
  return (
    <S.Wrapper>
      <div className="social-media">
        <FacebookLogo />
        <InstaLogo />
      </div>
      <div className="dark-mode">
        <div className="bg"></div>
        <i>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26">
            <defs />
            <g stroke="currentColor" data-name="Elipse 1">
              <circle cx="13" cy="13" r="13" stroke="none" />
              <circle cx="13" cy="13" r="12.5" fill="none" />
            </g>
            <g fill="currentColor" data-name="Subtração 1">
              <path d="M14.603 20.129a7.828 7.828 0 01-6.209-.707 8.863 8.863 0 002.645-.387c4.66-1.424 7.292-6.375 5.867-11.034a8.863 8.863 0 00-1.158-2.41 7.828 7.828 0 014.058 4.752 7.811 7.811 0 01-.575 5.97 7.811 7.811 0 01-4.628 3.816z" />
              <path d="M14.456 19.65a7.313 7.313 0 004.333-3.572 7.313 7.313 0 00.539-5.589 7.328 7.328 0 00-2.216-3.404c.102.252.193.508.273.77 1.505 4.923-1.276 10.153-6.2 11.658-.26.08-.524.148-.79.205a7.317 7.317 0 004.061-.067m.293.956a8.329 8.329 0 01-8.144-1.892 8.336 8.336 0 004.288-.158c4.396-1.344 6.88-6.014 5.535-10.41a8.336 8.336 0 00-2.266-3.643 8.329 8.329 0 016.122 5.693 8.309 8.309 0 01-.612 6.351 8.309 8.309 0 01-4.923 4.06z" />
            </g>
          </svg>
        </i>
      </div>
    </S.Wrapper>
  )
}

export default TopUtilsBar
