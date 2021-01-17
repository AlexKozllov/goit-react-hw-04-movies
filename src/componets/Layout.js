import React from "react";
import AppBar from "./appBar/AppBar";
import Navigation from "./navigation/Navigation";

const Layout = ({ children }) => {
  return (
    <div>
      <AppBar />
      <hr />
      <main> {children}</main>
    </div>
  );
};

export default Layout;
