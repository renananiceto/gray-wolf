import React from "react";
import { Content } from "../../components";
import { data } from "../../components/Data";

export const Ovelha = () => {
  return (
  <div>
   <Content
   nome={data[4].nome}
   peso={data[4].peso}
   idade={data[4].idade}
   descricao={data[4].descricao}
   listImg={data[4].listImg}
   pPurple={data[4].pPurple}
   listImg2={data[4].listImg2}
   desc1={data[4].desc1}
   desc2={data[4].desc2}
   cit={data[4].cit}
   desc3={data[4].desc3}
   desc4={data[4].desc4}
   listImg3={data[4].listImg3}
   listitem={data[4].listitem}
   />
  </div>
  );
};
