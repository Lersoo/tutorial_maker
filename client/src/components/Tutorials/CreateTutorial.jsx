import React, { Component } from 'react'
import API from '../../utils/API';

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
    API.createTutorial(newTutorial)
      .then((res) => {
        const newTutorialId = res.data._id;
        window.location.pathname = `/tutorials/${newTutorialId}`;
      })
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
          <input type='submit' />
        </form>
      </div>

    )
  }
}