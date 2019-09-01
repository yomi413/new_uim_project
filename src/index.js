import React from "react";
import ReactDOM from "react-dom";
// import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./components/Home";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import StudentPage from "./components/StudentPage";
import ParentPage from "./components/ParentPage";

ReactDOM.render(
  //   <Provider store={store}>
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/student-page" component={StudentPage} />
      <Route exact path="/parent-page" component={ParentPage} />
    </Switch>
  </Router>,
  //   </Provider>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
