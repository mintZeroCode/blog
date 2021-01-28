import React from "react";
import Router from "next/router";

import { frontUrl } from "../../config/config";

import {
  Title,
  ContentBox,
  ContentTitle,
  ContentDate,
  Hr,
} from "../../styledComponents/layout/Main";

const Main = () => {
  return (
    <div>
      <Title>모든글</Title>

      <Hr />
      <ContentBox>
        <ContentDate>2020.6.20</ContentDate>
        <ContentTitle>[자바스크립트 중요 개념 정리 1] 스코프</ContentTitle>
        <br />
        자바스크립트 변수 범위에 대하여 설명합니다.
      </ContentBox>
      <Hr />

      <ContentBox>
        <ContentDate>2020.6.20</ContentDate>
        <ContentTitle>[자바스크립트 중요 개념 정리 2] this 바인딩</ContentTitle>
        <br />
        자바스크립트 this의 쓰임새에 대해 학습합니다.
      </ContentBox>
      <Hr />

      <ContentBox>
        <ContentDate>2020.6.20</ContentDate>
        <ContentTitle>[자바스크립트 중요 개념 정리 1] 스코프</ContentTitle>
        <br />
        자바스크립트 변수 범위에 대하여 설명합니다.
      </ContentBox>
      <Hr />

      <ContentBox>
        <ContentDate>2020.6.20</ContentDate>
        <ContentTitle>[자바스크립트 중요 개념 정리 1] 스코프</ContentTitle>
        <br />
        자바스크립트 변수 범위에 대하여 설명합니다.
      </ContentBox>
      <Hr />

      <ContentBox
        onClick={() => {
          Router.push("/javaScript/post_1");
        }}
      >
        <ContentDate>2020.6.20</ContentDate>
        <ContentTitle>[자바스크립트 중요 개념 정리 1] 스코프</ContentTitle>
        <br />
        자바스크립트 변수 범위에 대하여 설명합니다.
      </ContentBox>
      <Hr />
    </div>
  );
};

export default Main;
