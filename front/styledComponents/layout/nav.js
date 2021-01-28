import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  border-bottom: 1px solid #d9d9d9;
  font-size: 30px;
  background: white;
  padding: 20px 0px;
`;

export const AddDiv = styled.div`
  position: fixed;
  top: 85px;
  right: 0px;
  height: 100%;
  width: 30%;
  background-color: #f0ffff;
  z-index: 1000;
`;

export const AddMenu = styled.div`
  position: fixed;

  top: 20px;
  right: 10px;
  margin-left: 30px @media (min-width: 768px) {
    display: none;
  }
`;

export const Logo = styled.div`
  margin: 0px;
  cursor: pointer;
  z-index: 1000;

  @media (max-width: 768px) {
    font-size: 25px;
  }
  @media (max-width: 430px) {
    font-size: 20px;
  }
  @media (max-width: 290px) {
    font-size: 15px;
  }
`;

export const AddTitle = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 25px;
  }
  @media (max-width: 430px) {
    font-size: 20px;
  }
  @media (max-width: 290px) {
    font-size: 15px;
  }
`;
export const AddLink = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  @media (max-width: 768px) {
    font-size: 25px;
  }
  @media (max-width: 430px) {
    font-size: 20px;
  }
  @media (max-width: 290px) {
    font-size: 15px;
  }
  &:hover {
    border-bottom: 3px solid #6495ed;
  }
`;

export const Button = styled.button`
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  font-weight: 600;
  @media (max-width: 768px) {
    font-size: 25px;
  }
  @media (max-width: 430px) {
    font-size: 20px;
  }
  @media (max-width: 290px) {
    font-size: 15px;
  }
`;
