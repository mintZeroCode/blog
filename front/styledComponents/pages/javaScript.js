import styled from "styled-components";

export const Title = styled.div`
  border-radius: 20px;
  margin: 0px auto;
  margin-top: 60px;
  text-align: center;
  width: 30%;
  font-size: 60px;
  font-weight: 600;
  padding: 20px;

  @media (max-width: 1135px) {
    font-size: 53px;
  }
  @media (max-width: 1100px) {
    font-size: 50px;
  }
  @media (max-width: 1020px) {
    font-size: 38px;
  }
  @media (max-width: 768px) {
    font-size: 22px;
  }
  @media (max-width: 430px) {
    font-size: 18px;
  }
  @media (max-width: 290px) {
    font-size: 15px;
  }
`;

export const ContentBox = styled.div`
  border: 1px solid #f0ffff;
  border-radius: 10px;
  // box-shadow: 1px 1px 2px 2px #ccc;
  // background-color: white;
  margin: 0px auto;
  margin-top: 10px;

  text-align: center;
  width: 60%;
  cursor: pointer;
  min-height: 120px;
  @media (max-width: 1135px) {
    width: 100%;
  }
`;

export const ContentTitle = styled.div`
  text-align: center;
  font-size: 35px;
  font-weight: 600;

  @media (max-width: 1135px) {
    font-size: 30px;
  }
  @media (max-width: 1100px) {
    font-size: 26px;
  }
  @media (max-width: 1020px) {
    font-size: 22px;
  }
  @media (max-width: 768px) {
    font-size: 18px;
  }
  @media (max-width: 430px) {
    font-size: 16px;
  }
`;

export const ContentDate = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: 600;

  @media (max-width: 1135px) {
    font-size: 18px;
  }
  @media (max-width: 1100px) {
    font-size: 17px;
  }
  @media (max-width: 1020px) {
    font-size: 16px;
  }
  @media (max-width: 768px) {
    font-size: 15px;
  }
  @media (max-width: 430px) {
    font-size: 14px;
  }
`;

export const Hr = styled.hr`
  margin: 0 auto;

  @media (max-width: 1135px) {
    width: 100%;
  }
`;
