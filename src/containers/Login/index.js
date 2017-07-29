import React from 'react'
import Style from './style'
import SimpleHeader from '../../components/SimpleHeader'
import LoginCom from '../../components/Login'

class Login extends React.Component {
  onLogin = (username, code) => {
    console.log('username:' + username + ', code:' + code)
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

export default Login;