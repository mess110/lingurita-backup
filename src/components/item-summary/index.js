import React from 'react'

const style = {
  h1: {
    marginBottom: '0px',
    fontSize: '3em',
  },

  p: {
    marginTop: '0px',
  },

  div: {
    width: '50%',
    float: 'left',
    textAlign: 'center',
    paddingBottom: '100px',
  },
}

const ItemSummary = (props) => (
  <div>
    <div style={style.div}>
      <h1 style={style.h1}>{ props.nrLingurite }</h1>
      <p style={style.p}>lingurite de zahar</p>
    </div>
    <div style={style.div}>
      <h1 style={style.h1}>{ props.nrEUri }</h1>
      <p style={style.p}>E-uri</p>
    </div>
  </div>
)

export default ItemSummary
