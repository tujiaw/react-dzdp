import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Home from './Home'
import City from './City'
import Header from '../components/Header'
import Footer from '../components/Footer'
import localStore from '../utils/localStore'
import { CITY_NAME } from '../constants/localStoreKey'
import * as actionsUserinfo from '../actions/userinfo'

class App extends Component {
  constructor(props, context) {
    super(props, context)
  }

  componentDidMount() {
    let cityName = localStore.getItem(CITY_NAME)
    if (cityName == null) {
      cityName = '上海'
    }

    console.log(this.props);
    this.props.userinfoActions.update({
      cityName: cityName
    })
  }

  render() {
    const routerMap = (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/city" component={City} />
        </div>
      </Router>
    )

    return this.props.userinfo.cityName ? routerMap: <div>加载中...</div>
  }
}

////////////////////////////////////////////////////////////////////
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

export default connect(mapStateToProps, mapDispatchToProps)(App)