import React from "react";
import Router from "next/router";

import {
  Title,
  ContentBox,
  ContentTitle,
  ContentDate,
  Hr,
} from "../styledComponents/pages/javaScript";

import { frontUrl } from "../config/config";

const javaScript = () => {
  return (
    <div
      style={{
        paddingTop: "30px",
      }}
    >
      <Title>자바스크립트</Title>
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
          Router.push(`${frontUrl}/javaScript/post_4`);
        }}
      >
        <ContentDate>2020. 8. 19</ContentDate>
        <ContentTitle>
          [자바스크립트 중요 개념 정리 4]함수의 prototype 기능
        </ContentTitle>
        <br />
        자바스크립트 this의 쓰임새에 대해 학습합니다.
      </ContentBox>
      <Hr />

      <ContentBox
        onClick={() => {
          Router.push(`${frontUrl}/javaScript/post_3`);
        }}
      >
        <ContentDate> 2020. 8. 13</ContentDate>
        <ContentTitle>
          [자바스크립트 중요 개념 정리 3]기본데이터 타입의 prototype 기능
        </ContentTitle>
        <br />
        자바스크립트 변수 범위에 대하여 설명합니다.
      </ContentBox>
      <Hr />

      <ContentBox
        onClick={() => {
          Router.push(`${frontUrl}/javaScript/post_2`);
        }}
      >
        <ContentDate>2020.08.05</ContentDate>
        <ContentTitle>[자바스크립트 중요 개념 정리 2] this 바인딩</ContentTitle>
        <br />
        자바스크립트 변수 범위에 대하여 설명합니다.
      </ContentBox>
      <Hr />

      <ContentBox
        onClick={() => {
          Router.push(`${frontUrl}/javaScript/post_1`);
        }}
      >
        <ContentDate>2020.07.13</ContentDate>
        <ContentTitle>[자바스크립트 중요 개념 정리 1] 스코프</ContentTitle>
        <br />
        자바스크립트 변수 범위에 대하여 설명합니다.
      </ContentBox>
      <Hr />
    </div>
  );
};

export default javaScript;
