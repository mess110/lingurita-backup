import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import {
  qChange,
  selectItem
} from '../../modules/search'

const Search = (props) => (
  <div>
    <input type="text" value={props.q} onChange={props.qChange}/>
    <Link to={ "/items/" + props.q }>open</Link>
    <button onClick={() => props.selectItem(props.q)}>open</button>
    <button onClick={() => props.openItem(props)}>open</button>
    { props.item.name }
  </div>
)

const mapStateToProps = ({ search }) => ({
  q: search.q,
  item: search.item
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      selectItem,
      qChange,
      openItem: (props) => {
        props.selectItem(props.q);
        return push('/items/' + props.q)
      },
      changePage: () => push('/')
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)
