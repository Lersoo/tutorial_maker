import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

import Navbar from './components/navbar';
import CreateTutorial from './components/create_tutorial.component';
import TutorialsList from './components/tutorials_list.component';
import ShowTutorial from './components/show_tutorial.component';
import CreateStep from './components/create_step.component';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Route path="/" exact component={TutorialsList} />
        <Route path="/tutorials/:id" exact component={ShowTutorial} />
        <Route path="/tutorials/new" exact component={CreateTutorial} />
        {/* <Route path="/:id/edit" component={EditTutorial} */
        <Route path="/tutorials/:id/steps/new" component={CreateStep} />}
      </div>
    </Router>
  );
}

export default App;
