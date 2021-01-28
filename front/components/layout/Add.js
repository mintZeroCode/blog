import React, { useState } from "react";
import Router from "next/router";

import { AddDiv, AddTitle, AddLink } from "../../styledComponents/layout/nav";
import { frontUrl } from "../../config/config";

const Add = () => {
  return (
    <AddDiv>
      <AddTitle>카테고리</AddTitle>
      <hr />
      <AddLink
        onClick={() => {
          Router.push(`${frontUrl}/javaScript`);
        }}
      >
        자바스크립트
      </AddLink>
      <a>
        <AddLink>알고리즘</AddLink>
      </a>
    </AddDiv>
  );
};

export default Add;
