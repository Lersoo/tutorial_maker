import React, { Component } from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import styled from 'styled-components';

import { glaucous, blizzardBlue, chineseViolet, satin } from '../utils/colors';
import { Title } from '../components/shared/Title';
const Wrapper = styled.section`
  padding: 2em 10em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${satin};
  box-shadow: 5em 0em 2em rgba(0, 0, 0, 0.3);
  height: 20%;
`
const NavbarLink = styled(Link)`
  padding: 1em;
  margin: 0;
  text-decoration: none;
  color: ${blizzardBlue};
  transition: transform 0.4s ease;
  &:hover {
    transform: scale(1.1);
  }
`
export default class Navbar extends Component {
  state = {
    tutorial_id: ''
  }

  renderNewStepLink = () => {
    const tutorial_id = this.props
    return (
      <Link to={`/tutorials/${tutorial_id}/steps/new`}>Add a step</Link>
    )
  }

  render() {
    return (
      <Wrapper>
        <NavbarLink to='/'>
          <Title style={{ margin: '0' }}>Tutorial Maker</Title>
        </NavbarLink>
        <Switch>
          <Route path='/'>
            <NavbarLink to='/tutorials/new'> Create a Tutorial </NavbarLink>
          </Route>
          <Route path='/tutorials/:id' exact >
            <NavbarLink to='/'> Home </NavbarLink>
            <NavbarLink to='/tutorials/new'> Create a Tutorial </NavbarLink>
            {this.renderNewStepLink()}
          </Route>
        </Switch>
      </Wrapper>
    )
  }
}
