import styled from "styled-components";

export const Div = styled.div`
  text-align: center;
  padding: 0px;
  text-align: center;
  font-size: 30px;
  color: #6495ed;
  position: fixed;
  top: 85px;
  left: 0px;
  height: 100%;
  border-top: none;
  border-right: 1px solid #d9d9d9;
  z-index: 100;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const MenuItem = styled.div`
  padding: 10px;
  cursor: pointer;
  &:hover {
    border-bottom: 3px solid #6495ed;
  }
`;
