import React, { Component } from 'react'
import API from '../../utils/API';

export default class CreateStep extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step_description: '',
      step_media: ''
    }
  }

  onChangeStepDescription = (e) => {
    this.setState({ step_description: e.target.value })
  };

  onChangeStepMedia = (e) => {
    this.setState({ step_media: e.target.value })
  }

  onSubmit = (e) => {
    e.preventDefault();
    const tutorialID = this.props.match.params.id;

    const newStep = {
      step_description: this.state.step_description,
      step_media: this.state.step_media,
    };

    API.createStep(tutorialID, newStep)
      .then(res => {
        console.log(res)
        window.location.href = `/tutorials/${tutorialID}`
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
            placeholder="Enter a description for this step"
            onChange={this.onChangeStepDescription}
            value={this.state.step_description}
          />
          <input
            type='text'
            placeholder='Enter the URL of your media'
            onChange={this.onChangeStepMedia}
            value={this.state.step_media}
          />
          <input type='submit' />
        </form>
      </div>

    )
  }
}