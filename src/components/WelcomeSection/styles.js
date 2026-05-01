import { css, keyframes } from '@emotion/core';
import Background from '@assets/images/bg-welcome.jpeg';

export const styHero = css`
  width: 100%;
  height: 100vh;
`;

const radarAnimation = keyframes`
  0% {
    opacity: 0;
  }
  30% {
    opacity: 1;
  }
  60% {
    box-shadow: 0 0 0 30px rgba(255,255,255,.1);
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
`;

export const upAndDownAnimation = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(-5px); }
`;

export const styScrollWrapper = css`
  #scroll {
    display: flex;
    justify-content: center;
    cursor: pointer;

    span {
      position: absolute;
      bottom: 46px;
      text-align: center;
      color: #fff;
    }

    .text {
      color: #8b6b4a;
      font-family: 'Playfair Display', serif;
      display: block;
      margin-top: 10px;
      font-size: 14px;
      font-weight: bold;
      letter-spacing: 1px;
      text-align: center;
      text-transform: none;
    }

    @media screen and (max-width: 414px) {
      .text {
        bottom: 80px;
        font-size: 12px;
      }
    }

    @media screen and (max-width: 360px) {
      .text {
        bottom: 60px;
        font-size: 12px;
      }
    }
  }

  .scroll__icon {
    .button {
      position: absolute;
      bottom: 46px;
      left: 50%;
      z-index: 2;
      display: inline-block;
      transform: translate(0, -50%);
      /* Cambiado a café para que combine con el nombre */
      color: #8b6b4a;
      letter-spacing: 0.1em;
      text-decoration: none;
      transition: opacity 0.3s;

      span::before {
        position: absolute;
        top: -23px;
        left: -22px;
        z-index: -1;
        content: '';
        width: 44px;
        height: 44px;
        /* La sombra del radar ahora es un dorado muy suave */
        box-shadow: 0 0 0 0 rgba(181, 141, 86, 0.4);
        border-radius: 100%;
        opacity: 0;
        animation: ${radarAnimation} 3s infinite;
        box-sizing: border-box;
      }

      span::after {
        position: absolute;
        top: 50%;
        left: 50%;
        content: '';
        width: 16px;
        height: 16px;
        margin: -12px 0 0 -8px;
        /* Color de la flecha: Café oscuro para legibilidad */
        border-left: 2px solid #8b6b4a;
        border-bottom: 2px solid #8b6b4a;
        transform: rotate(-45deg);
        box-sizing: border-box;
      }
    }

    /* Estilo para el texto que acompaña a la flecha */
    .text {
      color: #8b6b4a;
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 2px;
    }

    &button:hover {
      opacity: 0.5;
    }
  }
`;

export const styBackground = css`
  background: linear-gradient(
    135deg,
    #ffdab9 0%,
    /* Peach Puff (Melón claro) */ #ffb7b2 50%,
    /* Rosa Melón medio */ #ff9aa2 100% /* Rosa pastel cálido */
  );
  background-size: cover;
  position: relative;

  /* Esto añade un sutil brillo satinado encima */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('https://www.transparenttextures.com/patterns/soft-wallpaper.png');
    opacity: 0.3;
  }
  background-size: cover;
  position: relative;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 400px) {
    .title {
      font-size: 40px;
    }

    .sub-title {
      font-size: 28px;
    }
  }

  @media screen and (max-width: 500px) {
    .title {
      font-size: 54px;
    }

    .sub-title {
      font-size: 28px;
    }
  }
`;

export const styWrapper = css`
  color: #fff;
  margin-top: -8em;

  img {
    max-width: 80px;
    margin-bottom: 24px;
  }

  h1 {
    margin-bottom: 0px;
    font-size: 100px;
    line-height: 1.5;
    font-family: 'Cookie', cursive;
    color: #fff;
  }

  h2 {
    color: #fff;
    font-size: 22px;
    font-weight: 600;
    line-height: 1.5;
    margin-bottom: 30px;
  }

  h4 {
    font-family: 'Cookie', cursive;
    margin: 0;
    color: #fff;
    font-size: 30px;
  }

  .getting-married {
    margin-top: -12px;
  }

  .to-dearest {
    font-size: 16px;
    color: #f1f1f1b3;
    margin-bottom: 8px;
  }

  .to-dearest-name {
    border-bottom: 1px solid;
    padding-bottom: 12px;
    max-width: 250px;
    margin: auto auto 30px auto;
  }

  .margin__bottom {
    margin-bottom: 3em !important;
  }

  a {
    color: #f14e95;
  }

  @media screen and (max-width: 330px) {
    img {
      max-width: 40px;
      margin-top: 24px;
      margin-bottom: 8px;
    }

    .to-dearest {
      margin-bottom: 8px;
      font-size: 16px;
    }

    .to-dearest-name {
      margin: auto auto 16px auto;
    }
  }
`;

export const styWrapperCount = css`
  display: inline-block;
  width: 100px;
  height: 100px;
  background: rgba(241, 78, 149, 0.8);
  margin: 8px;
  border-radius: 50%;
  position: relative;
  animation: pulse 1s ease infinite;
  color: #fff;

  h3 {
    font-size: 30px;
    color: #fff;
    margin: 20px 0 0 0;
  }

  @media screen and (max-width: 500px) {
    width: 75px;
    height: 75px;
    margin: 4px;
    font-size: 12px;

    h3 {
      font-size: 24px;
    }
  }

  @media screen and (max-width: 380px) {
    width: 55px;
    height: 55px;

    h3 {
      margin-top: 12px;
      margin-bottom: -4px;
      font-size: 16px;
    }

    span {
      font-size: 10px;
    }
  }
`;

export const styMargin = (px) => css`
  margin: ${px};
`;

export const styButtonWrapper = css`
  display: flex;
  justify-content: center;

  .btn {
    background: #f14e95;
    color: #fff;
    border: none;
  }
`;
