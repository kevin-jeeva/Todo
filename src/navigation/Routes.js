import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import TodoCompletedTable from "../components/Messages";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/completed" component={TodoCompletedTable} />
    </Switch>
  );
};

export default Routes;
