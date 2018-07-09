import React from 'react'
import { Route, Link } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'
import Home from '../home'
import About from '../about'

import './style.css'

const App = () => (
  <div>
    <header>
      <Menu>
        <Link to="/">Home</Link>
        <Link to="/about-us">About</Link>
      </Menu>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
    </main>
  </div>
)

export default App
