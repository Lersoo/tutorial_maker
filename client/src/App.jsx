import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from 'styled-components';

import './App.css'

import Navbar from './components/Navbar';
import CreateTutorial from './components/Tutorials/CreateTutorial';
import TutorialsList from './components/Tutorials/TutorialsList';
import ShowTutorial from './components/Tutorials/ShowTutorial';
import CreateStep from './components/Steps/CreateStep';

import { darkBlue, tumbleweed } from './utils/colors';

const Wrapper = styled.section`
  background: ${darkBlue};
  color: ${tumbleweed};
  flex: 1;
  padding: 2em 10em;
`
function App() {
  return (
    <Router>
      <Navbar />
      <Wrapper>
        <Switch>
          <Route path="/" exact component={TutorialsList} />
          <Route path="/tutorials/new" exact component={CreateTutorial} />
          <Route path="/tutorials/:id/steps/new" component={CreateStep} />
          <Route path="/tutorials/:id" exact component={ShowTutorial} />
        </Switch>
      </Wrapper>
    </Router>
  );
}

export default App;


// TUTORIAL -- https://medium.com/crowdbotics/deploy-a-mern-stack-app-on-heroku-b0c255744a70