import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { qChange } from '../../modules/search'
import { loadItems, loadItem } from '../../modules/item'
import ItemRow from '../../components/item-row'
import Mascot from '../../components/mascot'
import NotFoundAdd from '../../components/not-found-add'


class Browse extends React.Component {
  render() {
    return (
      <div>
        { this.props.items.map((item) =>
          <ItemRow item={item} key={item.id} onClick={() => this.props.openItem(this.props, item)} />
        ) }
        { (this.props.loaded && this.props.items.length === 0) && <NotFoundAdd /> }
        { !(this.props.loaded || this.props.loading) &&
            <Mascot value="YFW you find out how much sugar you eat"/>
        }
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
      openItem: (props, item) => {
        var key = item.code
        props.loadItem(key)
        return push('/items/' + key)
      }
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Browse)
