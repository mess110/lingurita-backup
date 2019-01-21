import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { teaSpoonGramsChange } from '../../modules/settings'

class Settings extends React.Component {
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <div>
          <span>1 teaspoon =</span>
          <input type="number" min="1" max="9" value={this.props.teaSpoonGrams} onChange={this.props.teaSpoonGramsChange} style={ { textAlign: 'center' } }/>
          <span>g of sugar</span>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ settings }) => ({
  teaSpoonGrams: settings.teaSpoonGrams,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      teaSpoonGramsChange,
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings)
