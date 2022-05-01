import React, { FC, useState } from "react";
import { Link } from "react-router-dom";

import "./header.scss";
import HeaderBar from "../HeaderBar/HeaderBar";
import DropItem from "../common/DropList/DropItem";
import { HOME_ROUTE } from "../../utils/paths";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const Header: FC = () => {
  const navItems = ["Home", "Pages", "Products", "Contacts"];


  return (
    <header className="header">
      <HeaderBar />
      <div className="header-inner">
        <Link to={HOME_ROUTE} className="header-inner__logo">
          Hekto
        </Link>
        <ul className="header-inner__navBar">
          {navItems.map((i) => (
            <DropItem key={i}>{i}</DropItem>
          ))}
        </ul>
        <div className="search">
          <input type="text" className="search__field" placeholder="Search" />
          <button className="search__btn" />
        </div>
      </div>
    </header>
  );
};

export default Header;
