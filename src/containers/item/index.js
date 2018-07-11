import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { loadItem } from '../../modules/item'

class Item extends React.Component {
  componentDidMount() {
    // oh wow. plz rewrite
    if (this.props.loaded || this.props.loading) {
      if (this.props.match.params.code !== this.props.item.code) {
        this.props.loadItem(this.props.match.params.code);
      }
    } else {
      if (!this.props.loading) {
        this.props.loadItem(this.props.match.params.code);
      }
    }
  }

  computeLingurite(item) {
    if (item === {} || item === undefined || item === null) {
      return 'N\\A'
    }

    item['sugar_grams'] = this.findSugarGrams(item)

    return item['sugar_grams'] / this.props.teaSpoonGrams
  }

  findSugarGrams(item) {
    var weight, raw_zaharuri_per_100g

    if (item['raw_zaharuri']) {
      return Number(item['raw_zaharuri'].replace('g', '').replace(',', '.'))
    } else if (item['raw_zaharuri_din_glucide']) {
      if (item['raw_zaharuri_din_glucide'].endsWith('g/100g')) {
        weight = this.findWeight(item);
        raw_zaharuri_per_100g = Number(item['raw_zaharuri_din_glucide'].replace('g/100g', '').replace(',', '.'))
        return (weight / 100) * raw_zaharuri_per_100g
      } else {
        return Number(item['raw_zaharuri_din_glucide'].replace('g', '').replace(',', '.'))
      }
    }

    if (item['raw_zahar_per_indulcitori']) {
      if (item['raw_zahar_per_indulcitori'].endsWith('g/100ml')) {
        weight = this.findWeight(item);
        raw_zaharuri_per_100g = Number(item['raw_zahar_per_indulcitori'].replace('g/100ml', '').replace(',', '.'))
        return (weight / 100) * raw_zaharuri_per_100g
      }
    }

    if (item['raw_zaharuri_per_25g']) {
      weight = this.findWeight(item);
      var raw_zaharuri_per_25g = Number(item['raw_zaharuri_per_25g'].replace('g', '').replace(',', '.'))
      return (weight / 25) * raw_zaharuri_per_25g
    }

    if (item['raw_zaharuri_per_100g']) {
      weight = this.findWeight(item);
      raw_zaharuri_per_100g = Number(item['raw_zaharuri_per_100g'].replace('g', '').replace(',', '.'))
      return (weight / 100) * raw_zaharuri_per_100g
    }

    if (item['raw_din_care_zaharuri']) {
      var raw_din_care_zaharuri = Number(item['raw_din_care_zaharuri'].replace('g', '').replace(',', '.'))
      return raw_din_care_zaharuri
    }

    if (item['raw_din_care_zaharuri_per_100g']) {
      weight = this.findWeight(item);
      var raw_din_care_zaharuri_per_100g = Number(item['raw_din_care_zaharuri_per_100g'].replace('g', '').replace(',', '.'))
      return (weight / 100) * raw_din_care_zaharuri_per_100g
    }
  }

  findWeight(item) {
    for (var key of ['raw_gramaj', 'raw_gramajg']) {
      if (item[key]) {
        return Number(item[key].replace('g', ''))
      }
    }
    if (item['raw_gramaj_per_ml']) {
      return Number(item['raw_gramaj_per_ml'].replace('ml', ''))
    }
    if (item['raw_cantitate']) {
      return Number(item['raw_cantitate'].replace('ml', '').replace('g', ''))
    }
  }

  render() {
    return (
      <div>
        <div>
          Nr. lingurite zahar: { this.computeLingurite(this.props.item) }
        </div>
        <br />
        <table>
          <tbody>
          { Object.keys(this.props.item).map((key) =>
            <tr key={key}>
              <td style={ { minWidth: 200 } }>{ key }</td>
              <td>{ this.props.item[key] }</td>
            </tr>
          ) }
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = ({ item, settings }) => ({
  item: item.item,
  loaded: item.loaded,
  loading: item.loading,
  teaSpoonGrams: settings.teaSpoonGrams,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      loadItem,
      changePage: () => push('/')
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Item)
