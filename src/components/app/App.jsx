import React from 'react';
import TitlePage from '../container-components/TitlePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CutScene from '../display-components/CutScene';
import Tutorial from '../functional-components/Tutorial';
import HeroProvider from '../../hooks/HeroProvider';
import VillagePage from '../container-components/VillagePage';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/cutscene">
          <HeroProvider>
            <CutScene />
          </HeroProvider>
        </Route>
        <Route exact path="/tutorial">
          <HeroProvider>
            <Tutorial />
          </HeroProvider>
        </Route>
        <Route exact path="/village">
          <HeroProvider>
            <VillagePage />
          </HeroProvider>
        </Route>
        {/* COMBAT ROUTE */}
        <Route exact path="/">
          <TitlePage />
        </Route>
      </Switch>
    </Router>
  );
}
