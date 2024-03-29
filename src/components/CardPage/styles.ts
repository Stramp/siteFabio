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
      left: -30%;
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
      color: #fff;
      z-index: ${theme._d.layers.alwaysOnTop};
      ul {
        list-style: inside;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        margin: 32px 0 0 0;
        font-weight: 600;
        font-size: 14px;
        padding: 16px 0 16px 0;
        background-color: #000000b1;
        li {
          color: #fff;
          width: 90%;
        }
      }
    }
    .content-container {
      padding: 460px 35px 35px 35px;
      width: 90vw;
      overflow: auto;
      button {
        margin: 16px 0 0;
      }
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
