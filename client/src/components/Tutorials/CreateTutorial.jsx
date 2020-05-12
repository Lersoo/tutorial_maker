import React, { Component } from 'react'
import API from '../../utils/API';
import { Form, Input, SubmitButton } from '../shared/formComponents'

export default class CreateTutorial extends Component {
  state = {
    tutorial_title: '',
    tutorial_steps: []
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
        <Form onSubmit={this.onSubmit}>
          <Input
            type='text'
            placeholder="Enter a name for your tutorial"
            onChange={this.onChangeTutorialTitle}
            value={this.state.tutorial_title}
          />
          <SubmitButton type='submit'> Submit </SubmitButton>
        </Form>
      </div>

    )
  }
}