import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import LandingPage from "./pages/LandingPage/LandingPage.js";

function App() {
  return (
    <Router>
      <div>
        {/* <Navigation /> */}
        <Switch>
          <Route exact path = "/">
            <LandingPage />     
          </Route>
        </Switch>
        {/* </Footer /> */}
      </div>
    </Router>
  );
}


export default App;