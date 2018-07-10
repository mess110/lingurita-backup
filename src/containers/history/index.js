import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class History extends React.Component {
  render() {
    return (
      <div>
        { this.props.history.map((item) =>
          <div key={item.timestamp} onClick={() => this.props.changePage(item.code)}>
            <p>{ item.code }</p>
            <p>{ item.name }</p>
            <p>{ item.timestamp }</p>
            <hr />
          </div>
        ) }
        { this.props.history.length === 0 && this.props.recordHistory &&
          <div>no history</div>
        }
        { !this.props.recordHistory &&
          <div>not recording history</div>
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
      changePage: (code) => push('/items/' + code)
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(History)
