import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { seaGreen, orchid, champagne, satin, darkBlue, blizzardBlue, candy } from '../../utils/colors';
import { Icon } from '../../utils/icons';
import { Title } from '../shared/Title';

const Wrapper = styled.div`
  min-width: 30%;
  width: fit-content;
  text-align: center;
  padding: 4em 8em;
  background: ${satin};
  margin: 2em auto;
  box-shadow: 0 1em 1em rgba(255, 255, 255, 0.0);
  border-radius: 1em;
  transition: all 300ms ease;
  position: relative;
  &:hover {
    background: ${candy};
    transform: translate(0px, -0.3em);
    box-shadow: 0 1em 1em rgba(255, 255, 255, 0.1);
  }
`;

const TutorialLink = styled(Link)`
  display: flex;
  justify-content: center;
  text-decoration: none;
  color: ${blizzardBlue};
`
const DeleteButton = styled.span`
  display: flex;
  justify-content: center;
  text-decoration: none;
  color: ${blizzardBlue};
  position: absolute;
  top: 2em;
  right: 2em;
  transition: all 0.3s ease;
  &:hover {
    cursor: pointer;
    color: white;
    transform: scale(1.1);
  }
`

const TutorialActions = styled('div')`
  display: flex;
`

class Tutorial extends Component {
  render() {
    const { _id, tutorial_title, deleteTutorial } = this.props;
    return (
      <Wrapper key={_id} >
        <TutorialLink to={_id ? `/tutorials/${_id}` : '/tutorials/new'}>
          <Title>{tutorial_title}</Title>
        </TutorialLink>
        <div className='tutorial-actions'>
          <DeleteButton onClick={() => deleteTutorial(_id)} className="material-icons" title="Delete the tutorial">highlight_off
            </DeleteButton>
        </div>
      </Wrapper>
    )
  }
}

export default Tutorial;