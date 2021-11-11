import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.scss';
import routes from './routes';
import Header from "./layout/header";
import Footer from "./layout/footer";

export default function App () {
  return (
    <Router>
      <Header></Header>
      <div className="main">
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ))}
        </Switch>
      </div>
      <Footer></Footer>
    </Router>
  );
}
