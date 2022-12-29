import React from "react";
import { Content } from "../../components";
import { data } from "../../components/Data";

export const Abelha = () => {
  return (
  <div>
   <Content
   nome={data[5].nome}
   peso={data[5].peso}
   idade={data[5].idade}
   descricao={data[5].descricao}
   listImg={data[5].listImg}
   pPurple={data[5].pPurple}
   listImg2={data[5].listImg2}
   desc1={data[5].desc1}
   desc2={data[5].desc2}
   cit={data[5].cit}
   desc3={data[5].desc3}
   desc4={data[5].desc4}
   listImg3={data[5].listImg3}
   listitem={data[5].listitem}
   />
  </div>
  );
};
