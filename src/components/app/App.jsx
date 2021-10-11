import React from 'react';
import TitlePage from '../container-components/TitlePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CutScene from '../display-components/CutScene';
import Tutorial from '../functional-components/Tutorial';
// import '../../styles/global-styles.css';

export default function App() {
  return (
    <Router>
      <Switch>
        {/*<Hero Provider /> */}
        <Route exact path="/cutscene">
          <CutScene />
        </Route>
        <Route exact path="/tutorial">
          <Tutorial />
        </Route>
        {/* VILLAGE ROUTE */}
        {/* COMBAT ROUTE */}
        {/*<HeroProvider /> */}
        <Route exact path="/">
          <TitlePage />
        </Route>
      </Switch>
    </Router>
  );
}
