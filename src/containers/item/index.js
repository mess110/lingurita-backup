import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
  loadItem
} from '../../modules/item'

class Item extends React.Component {
  componentDidMount() {
    if (!(this.props.loaded || this.props.loading)) {
      this.props.loadItem(this.props.match.params.code);
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

const mapStateToProps = ({ item }) => ({
  item: item.item,
  loaded: item.loaded,
  loading: item.loading,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      loadItem,
      changePage: () => push('/')
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Item)
