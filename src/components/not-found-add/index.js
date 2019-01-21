import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundAdd = (props) => (
  <div style={{ textAlign: 'center' }}>
    <h1>Item not found</h1>
    <p>Would you like to <Link to="/add">add it</Link>?</p>
  </div>
)

export default NotFoundAdd
