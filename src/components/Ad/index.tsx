import React from "react";
import { Link } from "react-router-dom";
import * as S from "./styles";
import anuncio1 from "../../imagens/anuncio-1.jpg"
import anuncio2 from "../../imagens/anuncio-2.jpg"
import "aos/dist/aos.css";

export const Ad = () => {
  return (
    <S.Container data-aos="fade-left">
        <div>
          <img src={anuncio1} alt="anuncio" />
        </div>
        <div>
          <img src={anuncio2} alt="anuncio" />
        </div>
    </S.Container>
  );
};
