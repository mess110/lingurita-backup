import React from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import { action as toggleMenu } from 'redux-burger-menu';

import Home from '../home'
import History from '../history'
import Item from '../item'
import About from '../about'
import NoMatch from '../no-match'
import Menu from '../../components/menu'

import { loadHistory } from '../../modules/history'

import './style.css'

class App extends React.Component {
  closeMenu() {
    this.props.store.dispatch(toggleMenu(false))
  }

  loadStorageHistory() {
    this.closeMenu()
    this.props.store.dispatch(loadHistory())
  }

  render() {
    return (
      <div>
        <header>
          <Menu>
            <Link onClick={ () => this.closeMenu() } to="/">Home</Link>
            <Link onClick={ () => this.loadStorageHistory() } to="/history">History</Link>
            <Link onClick={ () => this.closeMenu() } to="/about-us">About</Link>
          </Menu>
        </header>

        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about-us" component={About} />
            <Route exact path="/history" component={History} />
            <Route path="/items/:code" component={Item} />
            <Route component={NoMatch}/>
          </Switch>
        </main>
      </div>
    )
  }
}

export default App
