import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from 'styled-components';

import Navbar from './components/Navbar';
import CreateTutorial from './components/Tutorials/CreateTutorial';
import TutorialsList from './components/Tutorials/TutorialsList';
import ShowTutorial from './components/Tutorials/ShowTutorial';
import CreateStep from './components/Steps/CreateStep';

import { greenSheen, apricot } from './utils/colors';

const Wrapper = styled.section`
  padding: 0 30%;
  background: ${greenSheen};
  color: ${apricot}
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

//<Route path="/:id/edit" component={EditTutorial} />


// TUTORIAL -- https://medium.com/crowdbotics/deploy-a-mern-stack-app-on-heroku-b0c255744a70