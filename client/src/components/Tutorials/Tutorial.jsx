import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { seaGreen } from '../../utils/colors';

const Wrapper = styled.section`
  display: flex;
  padding: 4em;
  background: ${seaGreen};
  justify-content: space-between;
`;

const TutorialLink = styled(Link)`
  text-decoration: none;
  transition: transform 0.3s ease;
  color: black;
  &:hover {
    transform: scale(1.2);
    color: red;
  }
`

class Tutorial extends Component {
  render() {
    const { _id, tutorial_title, deleteTutorial } = this.props;
    return (
      <Wrapper key={_id} >
        <TutorialLink to={`/tutorials/${_id}`}>
          {tutorial_title}
        </TutorialLink>
        <TutorialLink onClick={() => deleteTutorial(_id)}>Delete this tutorial</TutorialLink>
      </Wrapper>
    )
  }
}

export default Tutorial;