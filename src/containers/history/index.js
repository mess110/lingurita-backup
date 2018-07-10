import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { loadHistory } from '../../modules/history'

class History extends React.Component {
  componentDidMount() {
    this.props.loadHistory()
  }

  render() {
    return (
      <div>
        <h1>History</h1>
        { this.props.items.map((item) =>
          <div key={item.timestamp}>
            <p>{ item.code }</p>
            <p>{ item.name }</p>
            <p>{ item.timestamp }</p>
            <hr />
          </div>
        ) }
      </div>
    )
  }
}

const mapStateToProps = ({ history }) => ({
  items: history.items,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      loadHistory
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(History)
