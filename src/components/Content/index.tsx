import React from "react";
import * as S from "./styles";
import Wolf1 from "../../imagens/wolf1.jpg";
import Wolf2 from "../../imagens/wolf2.jpg";
import Wolf3 from "../../imagens/wolf3.jpg";

export const Content = () => {
  return (
    <S.Container>
      <S.Title>
        <h1>Lobo Cinza</h1>
        <span>da família canis lupus</span>
      </S.Title>
      <S.Caract>
        <div>
          <S.Number>72</S.Number>
          <S.Rotu>Kg</S.Rotu>
        </div>
        <div>
          <S.Number>12</S.Number>
          <S.Rotu>Age</S.Rotu>
        </div>
      </S.Caract>
      <S.ParagrapG>
        É um sobrevivente da Era do Gelo, originário do Pleistoceno Superior,
        cerca de 300 mil anos atrás.[2] O sequenciamento de DNA e estudos
        genéticos reafirmam que o lobo cinzento é ancestral do cão doméstico
      </S.ParagrapG>
      <S.ImageM src={Wolf1} alt="Lobo" />
      <S.Destac>
        É um sobrevivente da Era do Gelo, originário do Pleistoceno Superior,
        cerca de 300 mil anos atrás.[2] O sequenciamento de DNA e estudos.
      </S.Destac>
      <S.ImageM2 src={Wolf2} alt="Lobo" />
      <p>
        O peso e tamanho dos lobos variam muito em todo o mundo, tendendo a
        aumentar proporcionalmente com a latitude, como previsto pela teoria de
        Christian Bergmann. Em geral, a altura, medida a partir dos ombros,
        varia de 60 a 95 centímetros.
      </p>
      <p>
        O peso varia geograficamente. Em média, os lobos europeus pesam 38,5 kg;
        os lobos da América do Norte, 36 kg; os lobos indianos e árabes, 25
        kg.[7] Embora raros, lobos com mais de 77 kg foram encontrados no
        Alasca, Canadá,[8] e na antiga União Soviética.
      </p>
    
        <S.ParagrapG2>
          “Há algo no uivar do lobo que tira um homem do aqui e agora e o
          transporta para uma floresta da mente.”
        </S.ParagrapG2>
      
      <S.Atri>
        <li>Surgiu: 12.000 anos</li>
        <li>Tipo: Mamífero</li>
        <li>Idade Média: 13 anos</li>
        <li>Macho adulto: 80kg</li>
        <li>Fêmea adulta: 55kg</li>
        <li>Família: Lupus</li>
      </S.Atri>
      <S.Info>
        <p>
          É um sobrevivente da Era do Gelo, originário do Pleistoceno Superior,
          cerca de 300 mil anos atrás.[2] O sequenciamento de DNA e estudos
          genéticos reafirmam que o lobo cinzento é ancestral do cão doméstico.
        </p>
        <p>
          É um sobrevivente da Era do Gelo, originário do Pleistoceno Superior,
          cerca de 300 mil anos atrás.[2] O sequenciamento de DNA e estudos
          genéticos reafirmam que o lobo cinzento é ancestral do cão doméstico.
        </p>
      </S.Info>
      <S.ImageG src={Wolf3} alt="Lobo" />
    </S.Container>
  );
};
