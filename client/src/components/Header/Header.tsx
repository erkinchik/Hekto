import React, { FC, useState } from "react";

import HeaderBar from "../HeaderBar/HeaderBar";
import "./header.scss";

const Header: FC = () => {
  const navItems = ["Home", "Pages", "Products", "Contacts"];

  return (
    <header className="header">
      <HeaderBar />
      <div className="header-inner">
        <h1 className="header-inner__logo">SuperElectronics</h1>
        <ul className="header-inner__navBar">
          {navItems.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
        <div className="search">
          <input type="text" className="search__field" />
          <button className="search__btn"/>
        </div>
      </div>
    </header>
  );
};

export default Header;
