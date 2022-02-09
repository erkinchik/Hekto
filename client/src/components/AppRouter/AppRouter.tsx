import React, {FC,useEffect} from "react";
import { Switch, Redirect, Route,useHistory} from "react-router-dom";

import { routes } from "../../routes/routes";
import {HOME_ROUTE, NOT_FOUND} from "../../utils/paths";

const AppRouter: FC = () => {
    const history = useHistory()

    // useEffect(()=>{
    //     history.push(HOME_ROUTE)
    // })

  return (
    <Switch>
      {routes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact={true} />
      ))}
      <Redirect to={NOT_FOUND} />
    </Switch>
  );
};

export default AppRouter;
