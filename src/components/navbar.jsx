import React, { Component } from 'react'
import { Link, Switch, Route } from 'react-router-dom'

export default class Navbar extends Component {
  renderNewStepLink = () => {
    return(
      <Link to='/tutorials/:id/steps/new'>Add a step</Link>
    )
  }

  render() {
    return (
      <div className="navbar">
        <Switch>
          <Route path='/'>
            <Link to='/'> Home </Link>
            <Link to='/tutorials/new'> Create a Tutorial </Link>
          </Route>
          <Route path='/tutorials/:id'>
            <Link to='/'> Home </Link>
            <Link to='/tutorials/new'> Create a Tutorial </Link>
            <Link to=''>{this.renderNewStepLink()}</Link>
          </Route>
        </Switch>


      </div>
    )
  }
}
