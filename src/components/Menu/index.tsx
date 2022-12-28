import React from "react";
import * as S from "./styles";

import wild from "../../imagens/wildbeast.svg";

export const Menu = () => {
  return (
    <S.Container>
      <a href="#">
        {" "}
        <img src={wild} alt="Logo" />
      </a>
      <nav>
        <ul>
          <li>
            <S.Lin to={"/"}>Sobre</S.Lin>
          </li>
          <li>
            <S.Lin to={"/"}>Animais</S.Lin>
          </li>
          <li>
            <S.Lin to={"/"}>Contato</S.Lin>
          </li>
        </ul>
      </nav>
    </S.Container>
  );
};
