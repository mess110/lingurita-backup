import React from 'react'

import mascot from '../../icons/fast-running-spoon.svg';

const Mascot = (props) => (
  <div style={{textAlign: 'center'}}>
      <img src={mascot} style={{width: '300px'}} alt="mascot"/>
      <h1>{ props.value }</h1>
  </div>
)

export default Mascot
