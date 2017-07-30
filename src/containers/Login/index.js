import React from 'react'
import Style from './style'
import SimpleHeader from '../../components/SimpleHeader'
import LoginCom from '../../components/Login'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ActionUserinfo from '../../actions/userinfo'

class Login extends React.Component {
  onLogin = (username, code) => {
    console.log('username:' + username + ', code:' + code)
    if (username.trim().length) {
      this.props.userinfoAction.update({
        username: username.trim()
      })
      window.history.back();
    }
  }

  render() {
    return (
      <div style={Style.root}>
        <SimpleHeader title="登录"/>
        <div style={Style.loginCom}>
          <LoginCom onLogin={this.onLogin}/>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return { 
    userinfoAction: bindActionCreators(ActionUserinfo, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
