import React from 'react';
import TitlePage from '../container-components/TitlePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CutScene from '../display-components/CutScene';
import Tutorial from '../functional-components/Tutorial';
import HeroProvider from '../../hooks/HeroProvider';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/cutscene">
          <HeroProvider >
            <CutScene />
          </ HeroProvider>
        </Route>
        <Route exact path="/tutorial">
          <HeroProvider>
            <Tutorial />
          </ HeroProvider>
        </Route>
        {/* VILLAGE ROUTE */}
        {/* COMBAT ROUTE */}
        <Route exact path="/">
          <TitlePage />
        </Route>
      </Switch>
    </Router>
  );
}
