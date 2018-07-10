import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Scan from '../../components/scan'
import { qChange } from '../../modules/search'
import { loadItem, loadItems } from '../../modules/item'
import search from '../../icons/search.svg';

const Search = (props) => (
  <div>
    <input type="text" value={props.q} onChange={props.qChange}/>
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
  item: item.item,
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
      openItem: (props) => {
        if (isNaN(props.q)) {
          props.loadItems(props.q);
          return push('/browse')
        } else {
          props.loadItem(props.q);
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
