import React, { Component } from 'react'
import styled from 'styled-components'
import ImageComponent from '../shared/ImageComponent'

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

class Step extends Component {
  render() {
    const { _id, step_description, step_media, deleteStep } = this.props
    return (
      <Wrapper>
        {step_description}
        <ImageComponent src={step_media} alt={step_description} />
        <p onClick={() => deleteStep(_id)}>Delete this step</p>
      </Wrapper>
    )
  }
}

export default Step;