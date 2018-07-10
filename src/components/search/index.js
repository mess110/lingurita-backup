import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Scan from '../../components/scan'
import { qChange } from '../../modules/search'
import { loadItem, loadItems } from '../../modules/item'

const Search = (props) => (
  <div>
    <input type="text" value={props.q} onChange={props.qChange}/>
    <button onClick={() => props.openItem(props)} disabled={!props.q}>open</button>
    <Scan />
  </div>
)

const mapStateToProps = ({ search }) => ({
  q: search.q,
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
