import React, { Component } from 'react';
import API from '../../utils/API';
import Tutorial from './Tutorial'
import styled from 'styled-components';
import { purple } from '../../utils/colors';

const Wrapper = styled.section`
  color: ${purple};
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
    API.deleteTutorial(tutorialId)
      .then(response => {
        console.log(response.data)
        this.fetchTutorials();
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  render() {
    const { tutorials } = this.state;
    return (
      <Wrapper >
        <h1> My Tutorials </h1>
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
      </Wrapper>
    )
  }
}

export default TutorialsList;