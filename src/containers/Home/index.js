import React, { Component } from 'react'
import Header from '../../components/Header'
import Category from '../../components/Category'
import Ad from './subpage/Ad'
import Recommend from './subpage/Recommend'
import Footer from '../../components/Footer'
import { connect } from 'react-redux'
import Style from './style'

class Home extends Component {
  render() {
    return (
      <div style={Style.root}>
        <Header cityName={this.props.userinfo.cityName} />
        <div style={Style.contentWrap}>
          <div style={Style.content}>
            <Category />
            <div style={Style.blank}></div>
            <Ad />
            <Recommend />
            <Footer />
          </div>
        </div>
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
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)