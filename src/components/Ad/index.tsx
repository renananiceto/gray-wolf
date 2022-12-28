import React from "react";
import { Link } from "react-router-dom";
import * as S from "./styles";
import anuncio1 from "../../imagens/anuncio-1.jpg"
import anuncio2 from "../../imagens/anuncio-2.jpg"


export const Ad = () => {
  return (
    <S.Container>
        <div>
          <img src={anuncio1} alt="anuncio" />
        </div>
        <div>
          <img src={anuncio2} alt="anuncio" />
        </div>
    </S.Container>
  );
};
