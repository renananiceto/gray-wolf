import styled from "styled-components";

export const Container = styled.div`
  p {
    font-size: 1.2em;
    line-height: 1.6;
    letter-spacing: -0.005em;
    color: rgba(0, 0, 0, 0.7);
  }
  li {
    list-style: none;
  }
  img {
    max-width: 100%;
    border-radius: 5px;
  }
  max-width: 900px;
  margin: 0 auto;
  padding: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
`;

export const ParagrapG = styled.p`
  grid-column: 1 /-1;
`;
export const ParagrapG2 = styled.p`
  align-self: start;
  grid-column: 1 /-1;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 5px 5px 15px 0px rgb(44 44 44 / 15%);
  background: linear-gradient(135deg, #8844ee, #b07dfb);
  color: #fff !important;
  font-size: 1.5em;
  font-style: italic;
  text-align: center;
  max-width: 500px;
  margin: 0 auto;
`;
export const Atri = styled.ul`
  align-self: start;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 5px 5px 15px 0px rgb(44 44 44 / 15%);
  background: linear-gradient(135deg, #8844ee, #b07dfb);
  color: #fff !important;

  li {
    color: #fff;
    font-size: 1.125em;
    padding: 15px;
    border-bottom: solid 2px #b07dfb;
  }
`;

export const ImageG = styled.img`
  grid-column: 1 /-1;
  margin: 0 auto;
  width: 620px;
`;

export const ImageM = styled.img`
  grid-row: span 2;
  align-self: end;
  width: 300px;
`;
export const ImageM2 = styled.img`
  align-self: end;
  width: 300px;
`;

export const Info = styled.div`
  p + p {
    margin-top: 30px;
  }
`;

export const Title = styled.div`
  color: #b07dfb;
  h1 {
    font-size: 3.75em;
    line-height: 1;
    font-weight: 700;
  }
  span {
    font-size: 0.875em;
    font-style: italic;
  }
`;

export const Caract = styled.div`
  display: flex;
  align-items: flex-start;
  span {
    display: block;
    color: #b07dfb;
  }
  > div {
    width: 80px;
    text-align: center;
    background: linear-gradient(135deg, #8844ee, #b07dfb);
    border-radius: 5px;
    box-shadow: 5px 5px 15px 0px rgb(44 44 44 / 15%);
    :first-child {
      margin-right: 30px;
    }
  }
`;

export const Number = styled.span`
  font-size: 3em;
  line-height: 1;
  margin: 10px auto;
`;

export const Rotu = styled.span`
  background: #fff;
  border-radius: 0 0 5px;
  padding: 5px 0;
`;
export const Destac = styled.p`
  font-size: 0.875em;
  color: #b07dfb !important;
  max-width: 16em;
`;
