import React, { Component } from 'react'
import API from '../../utils/API';
import { Form, Input, SubmitButton, TextArea, Label, FormWrapper } from '../shared/formComponents'
import { blizzardBlue } from '../../utils/colors'

export default class CreateStep extends Component {
  state = {
    step_description: '',
    step_media: ''
  }

  onChangeStepDescription = (e) => {
    this.setState({ step_description: e.target.value })
  };

  onChangeStepMedia = (e) => {
    console.log(e.target.files[0]);
    this.setState({ step_media: e.target.files[0] })
  }

  onSubmit = async (e) => {
    e.preventDefault();
    const mediaFile = this.state.step_media;
    this.uploadFile(mediaFile);
  }

  uploadFile(file) {
    const tutorialID = this.props.match.params.id;
    const cloudName = 'dimzs5mei';
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;

    if (file) {
      const uploadPreset = 'tutorial_maker';
      const fd = new FormData();
      const xhr = new XMLHttpRequest();
      const createStep = this.createStep;
      xhr.open('POST', url, true);
      xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
      xhr.onreadystatechange = function (e) {
        if (xhr.readyState === 4 && xhr.status === 200) {
          // File uploaded successfully
          const response = JSON.parse(xhr.responseText);
          createStep(tutorialID, response.secure_url);
        }
      };
      console.log(xhr.onreadystatechange);
      fd.append('upload_preset', uploadPreset);
      fd.append('file', file);
      xhr.send(fd);
    } else {
      this.createStep(tutorialID, '');
    }
  }

  createStep = (tutorialID, secure_url) => {
    const description = this.state.step_description;
    console.log(description)
    console.log('je suis la')

    const newStep = {
      step_description: description,
      step_media: secure_url
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
        <h1 style={{ color: blizzardBlue, marginBottom: '2em' }}>Create a new tutorial</h1>
        <Form onSubmit={this.onSubmit}>
          <FormWrapper>
            <Label>
              Describe this tutorial step:
          </Label>
            <TextArea
              label='Description'
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              onChange={this.onChangeStepDescription}
              value={this.state.step_description}
            />
          </FormWrapper>
          <Input
            type='file'
            accept="image/*"
            onChange={this.onChangeStepMedia}
          />
          <SubmitButton type='submit'>
            Submit
          </SubmitButton>
        </Form>
      </div>

    )
  }
}