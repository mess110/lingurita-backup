import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Scan from '../../components/scan'
import { qChange, qReset } from '../../modules/search'
import { loadItem, loadItems } from '../../modules/item'
import search from '../../icons/search.svg';

import './style.css'

const Search = (props) => (
  <div className="search-bar">
    <input type="text" value={props.q} onChange={props.qChange} onKeyPress={event => { if (event.key === 'Enter' && props.q) { props.openItem(props) } }} spellCheck="false" placeholder="search"/>
    <img className="button-icon" src={search} alt="search" onClick={() => props.openItem(props)} disabled={!props.q}/>
    <Scan />
  </div>
)

const mapStateToProps = ({ search, item }) => ({
  q: search.q,
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
      loadItem,
      loadItems,
      openItem: (props) => {
        if (!props.q) {
          // there should probably be an action which says no stuff found
          // instead of the redirect
          return push('/')
        }

        if (isNaN(props.q)) {
          props.loadItems(props.q)
          return push('/')
        } else {
          props.loadItem(props.q)
          return push('/items/' + props.q)
        }
      },
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)
