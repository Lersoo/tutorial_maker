import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class TutorialsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tutorials: []
    }
    console.log(this.state)
  }

  componentDidMount() {
    this.fetchTutorials();
  }

  fetchTutorials() {
    axios.get('http://localhost:4000/tutorials/')
      .then(response => {
        console.log(response.data)
        this.setState({ tutorials: response.data })
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  deleteTutorial(tutorialId) {
    console.log('Deleting')
    axios.delete(`http://localhost:4000/tutorials/${tutorialId}`)
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
      <React.Fragment >
        <h1> My Tutorials </h1>
        {
          tutorials ?

            <ul>
              {tutorials.map(({ _id, tutorial_title }) => {
                return (
                  <React.Fragment>
                    <Link to={`/tutorials/${_id}`} key={_id}>
                      <li key={_id}>
                        {tutorial_title}
                      </li>
                    </Link>
                    <div onClick={() => this.deleteTutorial(_id)}>[Delete this tutorial]</div>
                  </React.Fragment>
                )
              })}
            </ul>
            : 'Loading ...'

        }
      </React.Fragment>
    )
  }
}

export default TutorialsList;