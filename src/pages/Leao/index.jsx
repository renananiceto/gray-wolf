import React from "react";
import { Content } from "../../components";
import { data } from "../../components/Data";

export const Leao = () => {
  return (
  <div>
   <Content
   nome={data[2].nome}
   peso={data[2].peso}
   idade={data[2].idade}
   descricao={data[2].descricao}
   listImg={data[2].listImg}
   pPurple={data[2].pPurple}
   listImg2={data[2].listImg2}
   desc1={data[2].desc1}
   desc2={data[2].desc2}
   cit={data[2].cit}
   desc3={data[2].desc3}
   desc4={data[2].desc4}
   listImg3={data[2].listImg3}
   listitem={data[2].listitem}
   />
  </div>
  );
};
