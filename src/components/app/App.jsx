import React from 'react';
import TitlePage from '../container-components/TitlePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CutScene from '../display-components/CutScene';
import Tutorial from '../functional-components/Tutorial';
import HeroProvider from '../../hooks/HeroProvider';
import VillagePage from '../container-components/VillagePage';
import CombatPage from '../container-components/CombatPage';

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
        <Route exact path="/combat">
          <HeroProvider>
            <CombatPage />
          </HeroProvider>
        </Route>
        <Route exact path="/">
          <HeroProvider>
            <TitlePage />
          </HeroProvider>
        </Route>
      </Switch>
    </Router>
  );
}
