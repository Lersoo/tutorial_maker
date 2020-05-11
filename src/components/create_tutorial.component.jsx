import React, { Component } from 'react'
import { BrowserRouter as Link } from "react-router-dom";
import Axios from 'axios';

export default class CreateTutorial extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tutorial_title: '',
      tutorial_steps: []
    }
  }

  onChangeTutorialTitle = (e) => {
    this.setState({ tutorial_title: e.target.value })
  };

  onSubmit = (e) => {
    e.preventDefault();

    const newTutorial = { tutorial_title: this.state.tutorial_title };
    Axios.post('http://localhost:4000/tutorials/create', newTutorial)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
      <h2>Create a new tutorial</h2>
        <form onSubmit={this.onSubmit}>
          <input
            type='text'
            placeholder="Enter a name for your tutorial"
            onChange={this.onChangeTutorialTitle}
            value={this.state.tutorial_title}
          />
          <input type='submit'/>
        </form>
      </div>

    )
  }
}