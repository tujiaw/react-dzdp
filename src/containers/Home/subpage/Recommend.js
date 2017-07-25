import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import RecommendCom from '../../../components/Recommend'
import * as ActionRecommendinfo from '../../../actions/recommendinfo'
import LoadMore from '../../../components/LoadMore'
import Style from './style'

class Recommend extends Component {
  componentDidMount() {
    this.props.recommendAction.getInitDataIfNeedAsync(this.props.city)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.isScrollBottom !== nextProps.isScrollBottom) {
      this.props.recommendAction.getMoreDataIfNeedAsync(this.props.city)
    }
  }

  render() {
    const { isFetching, hasMore, list } = this.props.recommendinfo
    return (
      <div>
        <h2 style={Style.recommendTitle}>猜你喜欢</h2>
        {list.length 
          ? <RecommendCom list={list}/>
          : <div>加载中...</div>
        }
        <LoadMore isLoading={isFetching} hasMore={hasMore}/> 
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    city: state.userinfo.cityName,
    recommendinfo: state.recommendinfo
  }
}

function mapDispatchToProps(dispatch) {
  return {
    recommendAction: bindActionCreators(ActionRecommendinfo, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recommend)