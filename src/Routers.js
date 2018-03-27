import React from "react";
import { Router, Scene } from "react-native-router-flux";
import Auth from "./components/Auth";
import Home from "./components/Home";
import Login from "./components/Login";
import SearchCompany from "./components/Home/SearchCompany";

export default class Routers extends React.Component {
  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar>
          <Scene key="home" hideNavBar component={Home} initial />
          <Scene key="auth" hideNavBar component={Auth} />
          <Scene key="company_search" hideNavBar component={SearchCompany} />
        </Scene>
      </Router>
    );
  }
}
