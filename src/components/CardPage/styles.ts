import styled, { css } from 'styled-components'
import { CardProps } from '.'

export const Wrapper = styled.div<CardProps>`
  ${({ theme, uri }) => css`
    .card-content-container {
      width: fit-content;
      height: fit-content;
      display: block;
      top: 40px;
      left: 0;
      right: 0;
      position: fixed;
      z-index: ${theme._d.layers.alwaysOnTop};
      overflow: hidden;
      margin: 0 auto;
    }

    .card-content {
      position: relative;
      border-radius: 20px;
      background: #1c1c1e;
      width: 100%;
      margin: 0 auto;
      height: auto;
      max-width: 1200px;
      overflow: hidden;
      pointer-events: none;
    }
    .card-image-container {
      position: absolute;
      top: 0;
      left: 0;
      overflow: hidden;
      height: 420px;
      background-image: url(${uri});
      background-size: cover;
      background-position: center;
      width: 100vw;
    }
    .title-container {
      position: absolute;
      max-width: 300px;
      top: 30px;
      left: 30px;
      z-index: ${theme._d.layers.alwaysOnTop};
    }
    .content-container {
      padding: 460px 35px 35px 35px;
      width: 90vw;
      overflow: auto;
    }
    p {
      color: #9d9ca1;
      font-size: 20px;
      line-height: 28px;
    }
    .category {
      color: #fff;
      font-size: 14px;
      text-transform: uppercase;
    }
    .card {
      position: relative;
      padding: 25px;
      height: 460px;
      flex: 0 0 40%;
      max-width: 40%;
    }
    .overlay {
      z-index: ${theme._d.layers.alwaysOnTop - 1};
      position: fixed;
      background: rgba(0, 0, 0, 0.8);
      will-change: opacity;
      top: 0;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
    }
  `}
`
