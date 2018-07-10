import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const Item = props => (
  <div>
    <h1>{ props.match.params.code }</h1>
    <p>{ props.found ? 'found' : 'not found' }</p>
    <p>{ props.item.name }</p>
    <p>{ props.q }</p>
  </div>
)

const mapStateToProps = ({ item, search }) => ({
  found: item.found,
  item: search.item,
  q: search.q
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changePage: () => push('/')
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Item)
