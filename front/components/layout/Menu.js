import React from "react";
import Router from "next/router";

import { Div, MenuItem } from "../../styledComponents/layout/Menu";

import { frontUrl } from "../../config/config";

const Menu = () => {
  return (
    <>
      <Div>
        <MenuItem
          onClick={() => {
            Router.push(`${frontUrl}/javaScript`);
          }}
        >
          자바스크립트
        </MenuItem>
        <MenuItem>네트워크</MenuItem>
      </Div>
    </>
  );
};

export default Menu;
