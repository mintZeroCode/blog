import React, { useState, useMemo } from "react";
import Router from "next/router";

import Add from "./Add";

import { Div, AddMenu, Logo } from "../../styledComponents/layout/nav";
import { BsList } from "react-icons/bs";

import { frontUrl } from "../../config/config";

const Nav = () => {
  const [showDiv, setShowDiv] = useState(false);

  return (
    <>
      <Div>
        {showDiv && (
          <>
            <Add showDiv={showDiv} />
          </>
        )}

        <Logo
          onClick={() => {
            Router.push(`/frontUrl/`);
          }}
        >
          Mint Code 기술 블로그
        </Logo>
        <AddMenu
          onClick={() => {
            setShowDiv(!showDiv);
          }}
        >
          <BsList />
        </AddMenu>
      </Div>
    </>
  );
};

export default Nav;
