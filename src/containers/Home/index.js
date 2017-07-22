import React, { Component } from 'react'
import Header from '../../components/Header'
import Category from '../../components/Category'
import Footer from '../../components/Footer'
import { connect } from 'react-redux'

class Home extends Component {
  render() {
    return (
      <div>
        <Header cityName={this.props.userinfo.cityName} />
        <Category />
        <Footer />
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