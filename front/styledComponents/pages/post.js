import styled from "styled-components";

export const Title = styled.div`
  font-size: 25px;
  font-weight: 600;
  text-align: left;
`;

export const DateShow = styled.div`
  font-size: 25px;
  font-weight: 600;
  text-align: right;
`;

export const ContentBox = styled.div`
  padding: 10px;
  font-size: 18px;
`;

export const ContentDate = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: 600;
`;

export const CodeBox = styled.div`
  background: black;
  color: white;
`;

export const Div = styled.div`
  width: 60%;
  margin: 0 auto;
  padding-top: 120px;

  @media (max-width: 760px) {
    width: 100%;
  }
`;
