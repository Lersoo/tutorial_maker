import React, { Component } from 'react'
import styled from 'styled-components'
import { satin, blizzardBlueTransparent, blizzardBlue } from '../../utils/colors';
import { Icon } from '../../utils/icons';

export const StepWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2em;
  ${'' /* border-bottom: 1px solid ${satin}; */}
  transition: all .3s ease;
  &:hover {
    background-color: ${blizzardBlueTransparent(.1)};
  }
`;

const LeftSide = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  max-width: 30%;
  min-height: 10em;
  text-align: right;
  background-color: ${blizzardBlueTransparent()};
  color: ${blizzardBlue};
  padding: 0 5em;
`;

class Step extends Component {
  render() {
    const { _id, step_description, step_media, deleteStep } = this.props
    return (
      <StepWrapper>
        <LeftSide>
          {step_description}
        </LeftSide>
        { step_media !== '' ?
        (<img
          src={step_media}
          alt={step_description}
          style={{ 'maxWidth': '60%', 'maxHeight': '100%', 'marginRight': '2em' }}
        />)
        : <p style={{ 'maxWidth': '60%', 'maxHeight': '100%', 'margin': '0 2em' }}>No picture for this step</p>}
        <div>
          <Icon
            className="material-icons"
            onClick={() => deleteStep(_id)}
            title='Delete this step'
            size='40px'
          >
            clear
        </Icon>
        </div>
      </StepWrapper>
    )
  }
}

export default Step;