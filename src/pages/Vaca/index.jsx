import React from "react";
import { Content } from "../../components";
import { data } from "../../components/Data";

export const Vaca = () => {
  return (
  <div>
   <Content
   nome={data[3].nome}
   peso={data[3].peso}
   idade={data[3].idade}
   descricao={data[3].descricao}
   listImg={data[3].listImg}
   pPurple={data[3].pPurple}
   listImg2={data[3].listImg2}
   desc1={data[3].desc1}
   desc2={data[3].desc2}
   cit={data[3].cit}
   desc3={data[3].desc3}
   desc4={data[3].desc4}
   listImg3={data[3].listImg3}
   listitem={data[3].listitem}
   />
  </div>
  );
};
