import React from "react";
import Head from "next/head";

import Nav from "../components/layout/Nav";
import Add from "../components/layout/Add";
import Menu from "../components/layout/Menu";
import Main from "../components/layout/Main";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>interfree</title>
        <meta charset="utf-8" />
        <meta name="description" content="sns 포트폴리오" />
        <meta name="keywords" content="interfree, sns" />
        <meta name="author" content="mintzerocode" />
      </Head>
      <Nav />

      <Menu />
      {/* <Main /> */}
      <style jsx global>{`
        body {
          @import url("https://fonts.googleapis.com/css2?family=Hind+Vadodara:wght@500&display=swap");
          font-family: "Hind Vadodara", sans-serif;
          font-size: 16px;
          font-weight: 500;
          background-color: #f5f5f5;
          overflow-y: scroll;
        }
        a {
          cursor: pointer;
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
