import React from 'react'
import QRCode from 'qrcode.react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const About = props => (
  <div>
    <h3 style={{marginTop: '0px'}}>Mantra</h3>
    <ul>
      <li>People should know what they eat</li>
      <li>Labels should be human readable</li>
      <li>Knowledge should be shared</li>
    </ul>
    <h3>Lingurita community</h3>
    <ul>
      <li>How many teaspoons of sugar does your food contain?</li>
      <li>How many additives?</li>
    </ul>
    <p>These are the questions the app answers.</p>
    <p>Think of this as a community effort. If you can't find a product in the database, you can add it yourself. That way other users will be able to find it.</p>
    <h3>Product database</h3>
    <p>We have over <b>3000</b> items and growing.</p>
    <p>The database is populated from crawled public data (<a href="http://www.infocons.ro/">infocons.ro</a>) and user submitted content.</p>
    <p>No user information is stored. The history is stored only on the device and it is not sent to a server.</p>
    <h3>Free Software</h3>
    <p>This service is free for everybody. You can support it by donating BTC:</p>
    <div style={{ textAlign: 'center' }}>
    <QRCode value={ props.btcDonations }/>
    <p>{ props.btcDonations }</p>
    <p><a href="https://github.com/mess110/lingurita">source code</a></p>
    </div>
  </div>
)

const mapStateToProps = () => ({
  btcDonations: '3HYZN775GFj7cxoJQSkjhH238DLfRVegjx'
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
)(About)
