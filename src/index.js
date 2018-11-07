import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/now-ui-dashboard.css";
import "assets/css/demo.css";

import indexRoutes from "routes/index.jsx";

const browserHistory = createBrowserHistory();

ReactDOM.render(
  <Router history={browserHistory}>
    <Switch>
      {indexRoutes.map((prop, key) => {
        return (
          <Route
            parent_name={prop.parent_name}
            parent_icon={prop.parent_icon}
            items={prop.items}
          >
            <Route path={prop.path} key={key} component={prop.component} />
          </Route>
        );
      })}
    </Switch>
  </Router>,
  document.getElementById("root")
);
