import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import Header from '../../components/Header'
import Category from '../../components/Category'
import Ad from './subpage/Ad'
import Recommend from './subpage/Recommend'
import Footer from '../../components/Footer'
import { connect } from 'react-redux'
import Style from './style'

class Home extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      isScrollBottom: false
    }
  }

  onScrollHandle(event) {
    const clientHeight = event.target.clientHeight
    const scrollHeight = event.target.scrollHeight
    const scrollTop = event.target.scrollTop;
    this.setState({
      isScrollBottom: (clientHeight + scrollTop === scrollHeight)
    })
  }

  componentDidMount() {
    const content = ReactDOM.findDOMNode(this.refs.content)
    content.addEventListener('scroll', this.onScrollHandle.bind(this));
  }

  componentWillUnmount() {
    const content = ReactDOM.findDOMNode(this.refs.content)
    content.removeEventListener('scroll', this.onScrollHandle.bind(this));
  }

  render() {
    return (
      <div style={Style.root}>
        <Header cityName={this.props.userinfo.cityName} />
        <div style={Style.contentWrap}>
          <div style={Style.content}  ref="content">
            <Category />
            <div style={Style.blank}></div>
            <Ad />
            <Recommend isScrollBottom={this.state.isScrollBottom}/>
            {/* <Footer /> */}
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