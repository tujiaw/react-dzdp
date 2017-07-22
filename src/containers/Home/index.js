import React, { Component } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { connect } from 'react-redux'

class Home extends Component {
  render() {
    return (
      <div>
        <Header cityName={this.props.userinfo.cityName} />
        <p>
          Home
        </p>
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