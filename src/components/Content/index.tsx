import React from "react";
import * as S from "./styles";
import Wolf1 from "../../imagens/wolf1.jpg";
import Wolf2 from "../../imagens/wolf2.jpg";
import Wolf3 from "../../imagens/wolf3.jpg";
import { ContentProps } from "../../Types/ContentProps";
import "aos/dist/aos.css";

export const Content = ({
  nome,
  familia,
  peso,
  idade,
  descricao,
  pPurple,
  desc1,
  desc2,
  cit,
  desc3,
  desc4,
  listImg,
  listImg2,
  listImg3,
  listitem,

}: ContentProps) => {
  return (
    <S.Container data-aos="zoom-in">
      <S.Title>
        <h1>{nome}</h1>
        <span>{familia}</span>
      </S.Title>
      <S.Caract>
        <div>
          <S.Number>{peso}</S.Number>
          <S.Rotu>Kg</S.Rotu>
        </div>
        <div>
          <S.Number>{idade}</S.Number>
          <S.Rotu>Age</S.Rotu>
        </div>
      </S.Caract>
      <S.ParagrapG>{descricao}</S.ParagrapG>
      <S.ImageM src={listImg} alt="#" />
      <S.Destac>{pPurple}</S.Destac>
      <S.ImageM2 src={listImg2} alt="#" />
      <p>{desc1}</p>
      <p>{desc2}</p>
      <S.ParagrapG2 data-aos="zoom-in">{cit}</S.ParagrapG2>
      <S.Atri data-aos="fade-right">
        {
          listitem?.map((item)=>(
            <li>{item}</li>
          ))
        }
      </S.Atri>
      <S.Info>
        <p>{desc3}</p>
        <p>{desc4}</p>
      </S.Info>
      <S.ImageG data-aos="fade-up"
     data-aos-duration="1000" src={listImg3} alt="#" />
    </S.Container>
  );
};
