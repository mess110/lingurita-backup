import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ItemRow from '../../components/item-row'
import Mascot from '../../components/mascot'

class History extends React.Component {
  render() {
    return (
      <div>
        { this.props.history.map((item) =>
          <ItemRow item={item} key={item.timestamp} onClick={() => this.props.changePage(item.code)}/>
        ) }
        { this.props.history.length === 0 &&
            <Mascot value="No history"/>
        }
      </div>
    )
  }
}

const mapStateToProps = ({ search, settings }) => ({
  history: search.history,
  recordHistory: settings.recordHistory
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changePage: (code) => {
        return push('/items/' + code)
      }
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(History)
