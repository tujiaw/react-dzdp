import React from 'react'
import BorderButton from '../../../components/Buttons/BorderButton'
import { connect } from 'react-redux'
import history from '../../../utils/history'
import Style from './style'

class BuyAndStore extends React.Component {
  onBuyClick = () => {
    if (!this.handleLogin()) {
      return
    }
  }

  onStoreClick = () => {
    if (!this.handleLogin()) {
      return
    }
  }

  handleLogin = () => {
    if (this.props.userinfo.username) {
      return true
    }
    
    history.push('/login')
    return false
  }

  render() {
    return (
      <div style={Style.root}>
        <BorderButton text="购买" onClick={this.onBuyClick} />
        <BorderButton text="收藏" onClick={this.onStoreClick} />
      </div>      
    );
  }
}

function mapStateToProps(state) {
  return {
    userinfo: state.userinfo,
  }
}

function mapDispatchToProps(dispatch) {
  return { 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BuyAndStore)
