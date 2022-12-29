import React from "react";
import { Content } from "../../components";
import { data } from "../../components/Data";

export const Home = () => {
  return (
  <div>
   <Content
   nome={data[0].nome}
   peso={data[0].peso}
   idade={data[0].idade}
   descricao={data[0].descricao}
   listImg={data[0].listImg}
   pPurple={data[0].pPurple}
   listImg2={data[0].listImg2}
   desc1={data[0].desc1}
   desc2={data[0].desc2}
   cit={data[0].cit}
   desc3={data[0].desc3}
   desc4={data[0].desc4}
   listImg3={data[0].listImg3}
   listitem={data[0].listitem}
   />
  </div>
  );
};

