import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Scan from '../../components/scan'
import { qChange, qReset, lastQChange } from '../../modules/search'
import { loadItem, loadItems } from '../../modules/item'
import search from '../../icons/search.svg';

const Search = (props) => (
  <div>
    <input type="text" value={props.q} onChange={props.qChange} onKeyPress={event => { if (event.key === 'Enter' && props.q) { props.openItem(props) } }}/>
    <button onClick={() => props.openItem(props)} disabled={!props.q}>
      <img src={search} alt="search" style={{ width: 16 }}/>
    </button>
    <Scan />
    { props.loading &&
      <div>loading</div>
    }
    { props.items.length === 0 && props.loaded &&
      <div>no results found</div>
    }
  </div>
)

const mapStateToProps = ({ search, item }) => ({
  q: search.q,
  lastQ: search.lastQ,
  item: item.item,
  items: item.items,
  loaded: item.loaded,
  loading: item.loading,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      qChange,
      qReset,
      lastQChange,
      loadItem,
      loadItems,
      openItem: (props) => {
        if (isNaN(props.q)) {
          props.loadItems(props.q)
          props.lastQChange({target: { value: props.q }})
          return push('/')
        } else {
          props.loadItem(props.q)
          var pushUrl = '/items/' + props.q
          props.qChange({ target: { value: props.lastQ } })
          return push(pushUrl)
        }
      },
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)
