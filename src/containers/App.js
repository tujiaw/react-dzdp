import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Home from './Home'
import City from './City'
import NotFound from './404'
import localStore from '../utils/localStore'

class App extends Component {
  render() {
    const routerMap = (
      <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/city" component={City}  />
            <Route component={NotFound} />
          </Switch>
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
  return { }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)