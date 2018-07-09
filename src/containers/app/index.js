import React from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import { action as toggleMenu } from 'redux-burger-menu';

import Home from '../home'
import About from '../about'
import NoMatch from '../no-match'
import Menu from '../../components/menu'

import './style.css'

const App = (props) => (
  <div>
    <header>
      <Menu>
        <Link onClick={ () => { props.store.dispatch(toggleMenu(false)) } } to="/">Home</Link>
        <Link onClick={ () => { props.store.dispatch(toggleMenu(false)) } } to="/about-us">About</Link>
      </Menu>
    </header>

    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about-us" component={About} />
        <Route component={NoMatch}/>
      </Switch>
    </main>
  </div>
)

export default App
