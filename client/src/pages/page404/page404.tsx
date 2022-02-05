import React, { FC } from "react";
import { Link } from "react-router-dom";

import "./page404.scss";
import errorImage from "../../assets/404.svg";
import { HOME_ROUTE } from "../../utils/paths";

const Page404: FC = () => {
  return (
    <div className="notFound">
      <div className="content">
        <img src={errorImage} alt="404" className="content__image" />
        <Link to={HOME_ROUTE} className="content__home-btn">
          Back To Home
        </Link>
      </div>
    </div>
  );
};

export default Page404;
