import React, { Component } from 'react'
import Axios from 'axios';
import { Link } from 'react-router-dom';

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

  fetchTutorial(tutorialId) {
    Axios.get(`http://localhost:4000/tutorials/${tutorialId}`)
      .then(response => {
        this.setState({ tutorial: response.data })
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  fetchSteps(tutorialId) {
    Axios.get(`http://localhost:4000/tutorials/${tutorialId}/steps`)
      .then(response => {
        this.setState({ steps: response.data })
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  deleteStep(stepId) {
    Axios.delete(`http://localhost:4000/steps/${stepId}`)
      .then(response => {
        console.log(response.data)
        this.fetchSteps(this.props.match.params.id);
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  renderSteps() {
    return (
      this.state.steps.map(({ _id, step_description, step_media }) => {
        return (
          <div className="step" key={_id}>
            {step_description}
            <img src={step_media} alt={step_description} />
            <p onClick={() => this.deleteStep(_id)}>Delete this step</p>
          </div>
        )
      })
    )
  }

  render() {
    const { tutorial } = this.state
    return (
      <div>
        <h1>{tutorial.tutorial_title}</h1>
        <h2>Steps</h2>
        <Link to={`/tutorials/${tutorial._id}/steps/new`}>Add a step</Link>
        <div className="steps">
          {this.renderSteps()}
        </div>
      </div>
    )
  }
}
