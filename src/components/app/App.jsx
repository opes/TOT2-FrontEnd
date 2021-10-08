import React from 'react';
import TitlePage from '../container-components/TitlePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import '../../styles/global-styles.css';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <TitlePage />
        </Route>
      </Switch>
    </Router>
  );
}
