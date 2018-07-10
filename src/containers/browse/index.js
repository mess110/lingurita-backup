import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { qChange } from '../../modules/search'

class Browse extends React.Component {
  render() {
    return (
      <div>
        <input type="text" value={this.props.q} onChange={this.props.qChange}/>
      </div>
    )
  }
}

const mapStateToProps = ({ search }) => ({
  q: search.q,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      qChange
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Browse)
