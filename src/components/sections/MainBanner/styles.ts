import styled, { css } from 'styled-components'
import { MainBannerProps } from '.'

export const BannerItem = styled.div<MainBannerProps>`
  ${({ theme, img }) => css`
    position: relative;
    width: 100vw;
    max-width: 1300px;
    margin: auto;
    height: 300px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-image: url(${img});
    background-color: ${theme.colors.mainBg};
    background-position: center;
    background-size: cover;

    object-fit: cover;
    h3 {
      font-size: ${theme._d.font.sizes.xxxlarge};
      font-style: italic;
      font-weight: ${theme._d.font.black};
      text-transform: uppercase;
      z-index: 2;
      color: white;
      text-shadow: -2px -2px 15px black, 2px 2px 10px black, 0 0 1.8rem black;
      text-align: center;
    }
    p {
      font-size: ${theme._d.font.sizes.large};
      font-weight: ${theme._d.font.light};
      z-index: 2;
      color: white;
      text-align: center;
      text-shadow: -2px -2px 15px black, 2px 2px 10px black, 0 0 1.8rem black;
    }
    &::before {
      content: '';
      opacity: 0.6;
      background-color: black;
      width: 100%;
      height: 100%;
      position: absolute;
    }
  `}
`

export const Wrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.mainTxt};
    margin-top: ${theme._d.spacings.large};
  `}
  .slick-dots, .slick-arrow {
    display: none !important;
  }
  /* Slider */
  .slick-slider {
    position: relative;

    display: block;
    box-sizing: border-box;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    -webkit-touch-callout: none;
    -khtml-user-select: none;
    -ms-touch-action: pan-y;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
  }

  .slick-list {
    position: relative;

    display: block;
    overflow: hidden;

    margin: 0;
    padding: 0;
  }
  .slick-list:focus {
    outline: none;
  }
  .slick-list.dragging {
    cursor: pointer;
    cursor: hand;
  }

  .slick-slider .slick-track,
  .slick-slider .slick-list {
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    -o-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  .slick-track {
    position: relative;
    top: 0;
    left: 0;

    display: block;
  }
  .slick-track:before,
  .slick-track:after {
    display: table;

    content: '';
  }
  .slick-track:after {
    clear: both;
  }
  .slick-loading .slick-track {
    visibility: hidden;
  }

  .slick-slide {
    display: none;
    float: left;

    height: 100%;
    min-height: 1px;
  }
  [dir='rtl'] .slick-slide {
    float: right;
  }
  .slick-slide img {
    display: block;
  }
  .slick-slide.slick-loading img {
    display: none;
  }
  .slick-slide.dragging img {
    pointer-events: none;
  }
  .slick-initialized .slick-slide {
    display: block;
  }
  .slick-loading .slick-slide {
    visibility: hidden;
  }
  .slick-vertical .slick-slide {
    display: block;

    height: auto;

    border: 1px solid transparent;
  }
  .slick-arrow.slick-hidden {
    display: none;
  }
`
