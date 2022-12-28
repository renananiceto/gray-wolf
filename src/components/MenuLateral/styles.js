import styled from "styled-components";
import { Link } from "react-router-dom";
export const Container = styled.nav`
  background-color: #faf2fc;
  padding: 30px;
  li {
    list-style: none;
  }
`;

export const Lin = styled(Link)`
  text-decoration: none;
  min-width: 60px;
  max-width: 140px;
  display: block;
  padding: 10px;
  border-radius: 5px;
  transition: 1s;
  box-shadow: 5px 5px 15px 0px rgb(44 44 44 / 15%);
  margin: 0 auto 30px auto;
  padding: 20px;
  :hover {
    background: #b07dfb;
    transition: 1s;
  }
`;
