import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import API from '../../utils/API';

import Step from '../Steps/Step';

export default class ShowTutorial extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tutorial: {},
      steps: []
    }
  }

  componentDidMount() {
    const tutorialId = this.props.match.params.id;
    this.fetchTutorial(tutorialId);
    this.fetchSteps(tutorialId);
  }

  fetchTutorial = (tutorialId) => {
    API.fetchTutorial(tutorialId)
      .then(response => {
        console.log(response);
        this.setState({ tutorial: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  fetchSteps = (tutorialId) => {
    API.fetchSteps(tutorialId)
      .then(response => {
        console.log(response.data);
        this.setState({ steps: response.data })
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  deleteStep = (stepId) => {
    API.deleteStep(stepId)
      .then(response => {
        console.log(response.data)
        this.fetchSteps(this.props.match.params.id);
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  deleteTutorial = (tutorialId) => {
    API.deleteTutorial(tutorialId)
      .then(response => {
        alert(response.data)
        window.location.pathname = '/';
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  renderSteps() {
    console.log(this.state.steps)
    return (
      this.state.steps.map(({ _id, step_description, step_media }) => {
        return (
          <Step
            key={_id}
            _id={_id}
            step_description={step_description}
            step_media={step_media}
            deleteStep={this.deleteStep}
          />
        )
      })
    )
  }

  render() {
    const { tutorial, } = this.state
    return (
      <div>
        <h1>{tutorial.tutorial_title}</h1>
        <h2>Steps</h2>
        <Link to={`/tutorials/${tutorial._id}/steps/new`}>Add a step</Link>
        <Link onClick={() => this.deleteTutorial(tutorial._id)}>Delete this tutorial</Link>
        <div className="steps">
          {this.renderSteps()}
        </div>
      </div>
    )
  }
}
