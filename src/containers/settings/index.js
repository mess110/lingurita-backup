import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { teaSpoonGramsChange, toggleRecordHistory } from '../../modules/settings'

class Settings extends React.Component {
  render() {
    return (
      <div>
        1 teaspoon =
        <input type="number" min="1" max="9" value={this.props.teaSpoonGrams} onChange={this.props.teaSpoonGramsChange} style={ { textAlign: 'center' } }/>g
        <br />
        <br />
        <label>
          <input type="checkbox" checked={this.props.recordHistory} onChange={this.props.toggleRecordHistory}/>
          Record history
        </label>
        <p>History is recorded only locally and it is not sent to any server</p>
      </div>
    )
  }
}

const mapStateToProps = ({ settings }) => ({
  teaSpoonGrams: settings.teaSpoonGrams,
  recordHistory: settings.recordHistory,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      teaSpoonGramsChange,
      toggleRecordHistory,
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings)
