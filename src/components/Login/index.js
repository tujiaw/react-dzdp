import React from 'react'
import Style from './style'
import SimpleButton from '../SimpleButton'
import Space from '../Space'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      phone: '',
      code: '',
    }
  }

  onPhoneChange = (e) => {
    this.setState({ phone: e.target.value })
  }

  onCodeChange = (e) => {
    this.setState({ code: e.target.value })
  }

  onLogin = () => {
    this.props.onLogin(this.state.phone, this.state.code)
  }

  render() {
    return (
      <div style={Style.root}>
        <div style={Style.inputWrap}>
          <i style={Style.icon} className="icon-tablet"></i>
          <input type="text" placeholder="输入手机号"
            style={Style.input}
            onChange={this.onPhoneChange}
            value={this.state.phone}/>
        </div>
        <Space fixedHeight={10} />
        <div style={Style.inputWrap}>
          <i style={Style.icon} className="icon-key"></i>
          <input type="text" placeholder="输入验证码"
            style={Style.codeInput}
            onChange={this.onCodeChange}
            value={this.state.code}/>
           <button style={Style.sendCodeButton}>发送验证码</button> 
        </div>
        <Space fixedHeight={10} />
        <SimpleButton text="登录" onClick={this.onLogin}/>
      </div>
    );
  }
}

export default Login;