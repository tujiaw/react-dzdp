import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import history from '../utils/history'
import Home from './Home'
import City from './City'
import Search from './Search'
import Detail from './Detail'
import Login from './Login'
import NotFound from './404'

class App extends Component {
  render() {
    const routerMap = (
      <Router history={history}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/city" component={City}  />
            <Route path="/search/all/:keyword" component={Search} /> 
            <Route path="/detail/:id" component={Detail} /> 
            <Route path="/login" component={Login} /> 
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