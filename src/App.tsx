import React from "react";
import Main from "./view/main";

import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/mini-me" exact component={Main} />
          <Redirect from="*" to="/mini-me" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
