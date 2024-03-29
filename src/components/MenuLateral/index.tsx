import React, {useEffect} from "react";
import "aos/dist/aos.css";

import * as S from "./styles";
import Cervo from "../../imagens/cervo.svg";
import Leao from "../../imagens/leao.svg";
import Gato from "../../imagens/gato.svg";
import Vaca from "../../imagens/vaca.svg";
import Ovelha from "../../imagens/ovelha.svg";
import { useLocation} from "react-router-dom";
import { useDispatch } from "react-redux";



export const MenuLateral = () => {
  const dispatch = useDispatch()
  const location = useLocation()

  useEffect(()=>{
    dispatch({type:"SET_ANIMALS",payload:location})
   
  },[location])
  
  return (
    <S.Container >
      <ul>
        <li data-aos="fade-right">
          <S.Lin to={"/Cervo"}>
            <a href="">
              <img src={Cervo} alt="#" />
            </a>
          </S.Lin>
        </li>
        <li data-aos="fade-right">
          <S.Lin to={"/Leao"}>
            <a href="">
              <img src={Leao} alt="#" />
            </a>
          </S.Lin>
        </li>
        <li data-aos="fade-right">
          <S.Lin to={"/"}>
            <a href="">
              <img src={Gato} alt="#" />
            </a>
          </S.Lin>
        </li>
        <li data-aos="fade-right">
          <S.Lin to={"/Vaca"}>
            <a href="">
              <img src={Vaca} alt="#" />
            </a>
          </S.Lin>
        </li>
        <li data-aos="fade-right">
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
