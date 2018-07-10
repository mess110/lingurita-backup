import React from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import { action as toggleMenu } from 'redux-burger-menu';

import About from '../about'
import Browse from '../browse'
import History from '../history'
import Item from '../item'
import Menu from '../../components/menu'
import NoMatch from '../no-match'
import Settings from '../settings'

import './style.css'

class App extends React.Component {
  closeMenu() {
    this.props.store.dispatch(toggleMenu(false))
  }

  render() {
    return (
      <div>
        <div className="top-bar"></div>
        <div className="top-bar-faker" onClick={ () => this.closeMenu() }></div>
        <div id="outer-container">
          <header>
            <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
              <Link onClick={ () => this.closeMenu() } to="/">Browse</Link>
              <Link onClick={ () => this.closeMenu() } to="/history">History</Link>
              <Link onClick={ () => this.closeMenu() } to="/settings">Settings</Link>
              <Link onClick={ () => this.closeMenu() } to="/about-us">About</Link>
            </Menu>
          </header>

          <main id="page-wrap">
            <Switch>
              <Route exact path="/" component={Browse} />
              <Route exact path="/about-us" component={About} />
              <Route exact path="/history" component={History} />
              <Route exact path="/settings" component={Settings} />
              <Route path="/items/:code" component={Item} />
              <Route component={NoMatch}/>
            </Switch>
          </main>
        </div>
      </div>
    )
  }
}

export default App
