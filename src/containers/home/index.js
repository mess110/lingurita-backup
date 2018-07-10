import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Search from '../../components/search'

const Home = props => (
  <div>
    <Search />
  </div>
)

const mapStateToProps = () => ({
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
