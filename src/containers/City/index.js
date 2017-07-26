import React, { Component } from 'react'
import SimpleHeader from '../../components/SimpleHeader'
import CityList from '../../components/CityList'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionsUserinfo from '../../actions/userinfo'
import { HOT_CITY_LIST } from '../../constants/otherTypes'
import Style from './style'

class City extends Component {
  onCityChanged = (city) => {
    this.props.userinfoActions.update({
      cityName: city
    })
    this.props.history.push('/')
  }

  render() {
    return (
      <div style={Style.root}>
        <SimpleHeader title="选择城市" />
        <div style={Style.currentCity}>{this.props.userinfo.cityName}</div>
        <CityList cityList={HOT_CITY_LIST} onChanged={this.onCityChanged}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    userinfo: state.userinfo
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userinfoActions: bindActionCreators(actionsUserinfo, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(City)