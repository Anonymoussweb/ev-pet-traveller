import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

const Layout = (props) => {
  return (
    <>
      <Header />
      <Main content={props?.content} />
      <Footer />
    </>
  );
};

export default Layout;
