import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

// IMPORTS PERSOS
import { satin, candy, blizzardBlue } from '../../utils/colors';
import { Title } from '../shared/Title';
import { Icon } from '../../utils/icons';
import API from '../../utils/API';
import Step from '../Steps/Step';

const Wrapper = styled('div')`
  text-align: center;
`

const AddButton = styled(Link)`
  color: ${satin};
  transition: all 0.3s ease;
  &:hover {
    transform: translate(0, -0.3em);
    color: ${candy};
  }
`
export default class ShowTutorial extends Component {

  state = {
    tutorial: {},
    steps: []
  }

  componentDidMount() {
    const tutorialId = this.props.match.params.id;
    this.fetchTutorial(tutorialId);
    this.fetchSteps(tutorialId);
  }

  fetchTutorial = (tutorialId) => {
    API.fetchTutorial(tutorialId)
      .then(response => {
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
    confirmAlert({
      title: 'Confirm to delete',
      message: `Are you sure you want to delete this step?`,
      buttons: [
        {
          label: 'Yes',
          onClick: () => API.deleteStep(stepId)
            .then(response => {
              console.log(response.data)
              this.fetchSteps(this.props.match.params.id);
            })
            .catch(function (error) {
              console.log(error);
            })
        },
        {
          label: 'No',
          onClick: () => console.log('That was close!')
        }
      ]
    });

  }

  deleteTutorial = (tutorialId) => {
    confirmAlert({
      title: 'Confirm to delete',
      message: `Are you sure you want to delete this tutorial?`,
      buttons: [
        {
          label: 'Yes',
          onClick: () => API.deleteTutorial(tutorialId)
            .then(response => {
              window.location.pathname = '/';
            })
            .catch(function (error) {
              console.log(error);
            })
        },
        {
          label: 'No',
          onClick: () => console.log('That was close!')
        }
      ]
    });
  }

  renderSteps = () => {
    console.log(this.state.steps);
    return (
      this.state.steps != 0
        ?
        (this.state.steps.map(({ _id, step_description, step_media }) => {
          return (
            <Step
              key={_id}
              _id={_id}
              step_description={step_description}
              step_media={step_media}
              deleteStep={this.deleteStep}
            />
          )
        }))
        : <p style={{ 'marginTop': '2em' }}>
          There are no steps for this tutorial  <strong>( yet )</strong>.
        </p>
    )
  }


  renderAnchors() {
    return (
      this.state.steps.map(({ _id }) => {
        return (
          <a href={`/steps/${_id}`} key={_id}>
            <Icon className="material-icons"> panorama_fish_eye </Icon>
          </a>
        )
      })
    )
  }

  render() {
    const { tutorial } = this.state
    return (
      <Wrapper>
        <Title>Tutorial - {tutorial.tutorial_title}</Title>
        <div>{this.renderAnchors()}</div>
        <div className="steps">
          {this.renderSteps()}
        </div>
        <AddButton
          to={`/tutorials/${tutorial._id}/steps/new`}
          title='Add a step'
        >
          <Icon className="material-icons">add_circle</Icon>
        </AddButton>
        <br />
        <Icon
          className="material-icons"
          onClick={() => this.deleteTutorial(tutorial._id)}
          title='Delete this tutorial'
        >
          highlight_off
          </Icon>
      </Wrapper>
    )
  }
}
