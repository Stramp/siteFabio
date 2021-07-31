import { CardProps } from 'components/CardPage'
import styled, { css } from 'styled-components'

export const Wrapper = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  li.card {
    position: relative;
    padding: 25px;
    height: 460px;
    flex: 0 0 40%;
    max-width: 32%;
    min-width: 330px;
  }
`
export const CardClosed = styled.div<CardProps>`
  ${({ uri }) => css`
    width: 100%;
    height: 100%;
    position: relative;
    display: block;
    pointer-events: none;
    .card-content {
      pointer-events: auto;
      position: relative;
      border-radius: 20px;
      background: #1c1c1e;
      overflow: hidden;
      width: 100%;
      height: 100%;
      margin: 0 auto;
    }
    .card-image-container {
      position: absolute;
      top: 0;
      left: 0;
      overflow: hidden;
      height: 420px;
      width: 100vw;
      background-image: url(${uri});
      background-position: center;
      background-size: cover;
    }
    .title-container {
      position: absolute;
      top: 15px;
      left: 15px;
      max-width: 300px;
    }
    .category {
      color: #fff;
      font-size: 14px;
      text-transform: uppercase;
    }
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
        width: 90%;
      }
    }
  `}
`
