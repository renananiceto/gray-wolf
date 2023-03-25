import React from "react";
import * as S from "./styles";

import { connect, useSelector  } from "react-redux";
import { store } from "../../store";
import wild from "../../imagens/wildbeast.svg";



export const Menu = () => {


  const todos = useSelector<any,any>(state => state)

  console.log("AAAA",todos.pathname)

  return (
    <S.Container>
      <a href="#">
        <img src={wild} alt="Logo" />
        <span>
      <p>{todos.pathname}</p>
        </span>
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

