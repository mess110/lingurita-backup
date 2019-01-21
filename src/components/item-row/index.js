import React from 'react'

const ItemRow = (props) => (
  <div onClick={props.onClick} style={{ cursor: 'pointer' }}>
    <p>{props.item.name}</p>
    <p>{props.item.code}</p>
    <hr />
  </div>
)

export default ItemRow
