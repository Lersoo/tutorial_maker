import React, { Component } from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import styled from 'styled-components';

import { blueGray, apricot, cadetBlue } from '../utils/colors';

const Wrapper = styled.section`
  padding: 0 20em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${cadetBlue};
`

const Title = styled.h1`

`

const NavbarLink = styled(Link)`
  padding: 1em;
  text-decoration: none;
  color: ${apricot};
  transition: transform 0.4s ease;
  &:hover {
    transform: scale(1.1);
  }
`

export default class Navbar extends Component {
  renderNewStepLink = () => {
    return (
      <Link to='/tutorials/:id/steps/new'>Add a step</Link>
    )
  }

  render() {
    return (
      <Wrapper>
        <NavbarLink to='/'>
          <Title>Tutorial Maker</Title>
        </NavbarLink>
        <Switch>
          <Route path='/'>
            <NavbarLink to='/tutorials/new'> Create a Tutorial </NavbarLink>
          </Route>
          <Route path='/tutorials/:id'>
            <NavbarLink to='/'> Home </NavbarLink>
            <NavbarLink to='/tutorials/new'> Create a Tutorial </NavbarLink>
            <NavbarLink to=''>{this.renderNewStepLink()}</NavbarLink>
          </Route>
        </Switch>
      </Wrapper>
    )
  }
}
