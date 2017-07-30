import React, { Component } from 'react'
import HomeHeader from '../../components/HomeHeader'
import Category from '../../components/Category'
import Ad from './Ad'
import Recommend from './Recommend'
import { connect } from 'react-redux'
import Style from './style'

let scrollTop = 0
class Home extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      isScrollBottom: false,
      contentNode: null
    }
  }

  onScrollHandle(event) {
    const clientHeight = event.target.clientHeight
    const scrollHeight = event.target.scrollHeight
    const scrollTop = event.target.scrollTop
    const isBottom = (clientHeight + scrollTop === scrollHeight)
    if (this.state.isScrollBottom !== isBottom) {
      this.setState({
        isScrollBottom: isBottom
      })
    }
  }

  componentDidMount() {
    if (this.contentNode) {
      this.contentNode.addEventListener('scroll', this.onScrollHandle.bind(this));
      this.contentNode.scrollTop = scrollTop
    }
  }

  componentWillUnmount() {
    if (this.contentNode) {
      this.contentNode.removeEventListener('scroll', this.onScrollHandle.bind(this));
      scrollTop = this.contentNode.scrollTop
    }
  }

  onSearch = (text) => {
    this.props.history.push('/search/all/' + encodeURIComponent(text))
  }

  render() {
    return (
      <div style={Style.root}>
        <HomeHeader cityname={this.props.userinfo.cityname} onSearch={this.onSearch}/>
        <div style={Style.contentWrap}>
          <div style={Style.content}  ref={ node => this.contentNode = node }>
            <Category />
            <div style={Style.blank}></div>
            <Ad />
            <Recommend isScrollBottom={this.state.isScrollBottom}/>
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