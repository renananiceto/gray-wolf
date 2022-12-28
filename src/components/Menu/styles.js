import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  background: linear-gradient(135deg, #8844ee, #b07dfb);
  padding: 30px;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  li {
    list-style: none;
  }
  img {
  }
  a {
    max-width: 200px;
    cursor: pointer;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
  }
  li + li {
    margin-left: 30px;
  }
`;

export const Lin = styled(Link)`
  text-decoration: none;
  display: block;
  padding: 10px;
  color: #fff;
  font-size: 1.125em;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  transition: 1s;
  :hover {
    background: rgba(0, 0, 0, 0.5);
    transition: 1s;
  }
`;
