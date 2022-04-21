import React, {FC,useEffect} from "react";
import { Switch, Redirect, Route,useHistory} from "react-router-dom";

import { routes } from "../../routes/routes";
import {HOME_ROUTE} from "../../utils/paths";

const AppRouter: FC = () => {
  return (
    <Switch>
      {routes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact={true} />
      ))}
      <Redirect to={HOME_ROUTE} />
    </Switch>
  );
};

export default AppRouter;
