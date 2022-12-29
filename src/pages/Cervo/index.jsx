import React from "react";
import { Content } from "../../components";
import { data } from "../../components/Data";

export const Cervo = () => {
  return (
  <div>
   <Content
   nome={data[1].nome}
   peso={data[1].peso}
   idade={data[1].idade}
   descricao={data[1].descricao}
   listImg={data[1].listImg}
   pPurple={data[1].pPurple}
   listImg2={data[1].listImg2}
   desc1={data[1].desc1}
   desc2={data[1].desc2}
   cit={data[1].cit}
   desc3={data[1].desc3}
   desc4={data[1].desc4}
   listImg3={data[1].listImg3}
   listitem={data[1].listitem}
   />
  </div>
  );
};

