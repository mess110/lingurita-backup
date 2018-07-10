import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
  selectItem
} from '../../modules/search'

class Item extends React.Component {
  componentDidMount() {
    if (!(this.props.loaded || this.props.loading)) {
      this.props.selectItem(this.props.match.params.code);
    }
  }

  render() {
    return (
      <div>
        <h1>{ this.props.match.params.code }</h1>
        <p>{ this.props.item.name }</p>
      </div>
    )
  }
}

const mapStateToProps = ({ search }) => ({
  item: search.item,
  loaded: search.loaded,
  loading: search.loading,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      selectItem,
      changePage: () => push('/')
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Item)
