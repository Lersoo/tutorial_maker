import React, { Component } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import styled from 'styled-components';

import API from '../../utils/API';
import Tutorial from './Tutorial'
import { Title } from '../shared/Title'
import { purple, blizzardBlue, satin } from '../../utils/colors';

const Wrapper = styled.div`
  color: ${blizzardBlue};
`
class TutorialsList extends Component {

  state = {
    tutorials: []
  }

  componentDidMount() {
    this.fetchTutorials();
  }

  fetchTutorials = () => {
    API.fetchTutorials()
      .then(response => {
        console.log(response.data)
        this.setState({ tutorials: response.data })
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  deleteTutorial = (tutorialId) => {
    confirmAlert({
      title: 'Confirm to submit',
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

  render() {
    const { tutorials } = this.state;
    return (
      <Wrapper>
        <Title> My Tutorials </Title>
        {tutorials.map(({ _id, tutorial_title }) => {
          return (
            <Tutorial
              key={_id}
              _id={_id}
              tutorial_title={tutorial_title}
              deleteTutorial={this.deleteTutorial}
            />
          )
        })
        }
        <Tutorial
          tutorial_title='Create a new tutorial' />
      </Wrapper>
    )
  }
}

export default TutorialsList;