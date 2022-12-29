import React from "react";

import * as S from "./styles";
import Cervo from "../../imagens/cervo.svg";
import Leao from "../../imagens/leao.svg";
import Gato from "../../imagens/gato.svg";
import Vaca from "../../imagens/vaca.svg";
import Ovelha from "../../imagens/ovelha.svg";
import Abelha from "../../imagens/abelha.svg";

export const MenuLateral = () => {
  return (
    <S.Container>
      <ul>
        <li>
          <S.Lin to={"/Cervo"}>
            <a href="">
              <img src={Cervo} alt="#" />
            </a>
          </S.Lin>
        </li>
        <li>
          <S.Lin to={"/Leao"}>
            <a href="">
              <img src={Leao} alt="#" />
            </a>
          </S.Lin>
        </li>
        <li>
          <S.Lin to={"/"}>
            <a href="">
              <img src={Gato} alt="#" />
            </a>
          </S.Lin>
        </li>
        <li>
          <S.Lin to={"/Vaca"}>
            <a href="">
              <img src={Vaca} alt="#" />
            </a>
          </S.Lin>
        </li>
        <li>
          <S.Lin to={"/Ovelha"}>
            <a href="">
              <img src={Ovelha} alt="#" />
            </a>
          </S.Lin>
        </li>
      </ul>
    </S.Container>
  );
};
