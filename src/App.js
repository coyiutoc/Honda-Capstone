import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import LandingPage from "pages/LandingPage/LandingPage.js";
import TeamPage from "pages/TeamPage/TeamPage.js";
import Navigation from "components/Navigation/Navigation.js";
import Footer from "components/Footer/Footer.js";
import routes from "routes.js";

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route exact path={routes.home}>
            <LandingPage />     
          </Route>
          <Route exact path={routes.process}>
            <div className="container">PROCESS PAGE</div>
          </Route>
          <Route exact path={routes.team}>
            <TeamPage />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}


export default App;