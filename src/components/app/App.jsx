import React from 'react';
import TitlePage from '../container-components/TitlePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CutScene from '../display-components/CutScene';
// import '../../styles/global-styles.css';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/cutscene/:id">
          <CutScene />
        </Route>
        <Route exact path="/">
          <TitlePage />
        </Route>
      </Switch>
    </Router>
  );
}
