import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { qChange } from '../../modules/search'
import { loadItems, loadItem } from '../../modules/item'
import Search from '../../components/search'

class Browse extends React.Component {
  render() {
    return (
      <div>
        <Search />
        { this.props.items.map((item) =>
          <div key={ item.code + item.name } onClick={() => this.props.openItem(this.props, item.code)}>
            <p>{ item.name }</p>
            <hr />
          </div>
        ) }
      </div>
    )
  }
}

const mapStateToProps = ({ search, item }) => ({
  q: search.q,
  items: item.items,
  loaded: item.loaded,
  loading: item.loading,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      qChange,
      loadItem,
      loadItems,
      openItem: (props, code) => {
        props.loadItem(code)
        return push('/items/' + code)
      }
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Browse)
