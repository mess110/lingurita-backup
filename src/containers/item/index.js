import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { loadItem } from '../../modules/item'
import NotFoundAdd from '../../components/not-found-add'
import ItemSummary from '../../components/item-summary'

class Item extends React.Component {
  componentDidMount() {
    // oh wow. plz rewrite
    if (this.props.loaded) {
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
    return parseFloat(item['sugar_grams'] / this.props.teaSpoonGrams).toFixed(2) || '?'
  }

  findSugarGrams(item) {
    var weight, raw_zaharuri_per_100g

    if (item['raw_zaharuri']) {
      return Number(item['raw_zaharuri'].replace('g', '').replace(',', '.'))
    } else if (item['raw_zaharuri_din_glucide']) {
      var no_whitespace = item['raw_zaharuri_din_glucide'].replace(/\s/g, '')
      if (no_whitespace.endsWith('g/100g')) {
        weight = this.findWeight(item)
        raw_zaharuri_per_100g = Number(no_whitespace.replace('g/100g', '').replace(',', '.'))
        console.log(raw_zaharuri_per_100g)
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

  findEUri(item) {
    return this.props.item.raw_nr_e_uri || '?'
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
        { !this.props.item.id && <NotFoundAdd /> }
        { this.props.item.id && <div>
          <ItemSummary nrLingurite={this.computeLingurite(this.props.item)} nrEUri={this.findEUri(this.props.item)}/>
          <div>
            <h3>Detalii</h3>
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
        </div> }
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
