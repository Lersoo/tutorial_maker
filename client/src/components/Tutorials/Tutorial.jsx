import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { seaGreen, orchid, blizzardBlue } from '../../utils/colors';

const Wrapper = styled.section`
  text-align: center;
  padding: 4em;
  background: ${orchid};
  margin: 2em auto;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.02);
  }
`;

const TutorialLink = styled(Link)`
  text-decoration: none;
  color: ${blizzardBlue};
`
const TutorialActions = styled('div')`
  display: flex;
`

class Tutorial extends Component {
  render() {
    const { _id, tutorial_title, deleteTutorial } = this.props;
    return (
      <Wrapper key={_id} >
        <TutorialLink to={`/tutorials/${_id}`}>
          <h1>{tutorial_title}</h1>
        </TutorialLink>
        <div className='tutorial-actions'>
          <TutorialLink to='' onClick={() => deleteTutorial(_id)}>
            Delete this tutorial
        </TutorialLink>
        </div>
      </Wrapper>
    )
  }
}

export default Tutorial;