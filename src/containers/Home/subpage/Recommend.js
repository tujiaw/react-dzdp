import React, { Component } from 'react'
import { connect } from 'react-redux'
import RecommendCom from '../../../components/Recommend'
import { getRecommendList } from '../../../fetch/home'
import * as ActionRecommendinfo from '../../../actions/recommendinfo'
import LoadMore from '../../../components/LoadMore'
import Style from './style'

class Recommend extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      isLoading: false
    }
  }

  componentDidMount() {
    if (this.props.list.length) {
      return
    }
    
    getRecommendList(this.props.city, 0)
    .then((json) => {
      if (json.success) {
        this.props.updateRecommendList(json.data)
      }
    })
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isScrollBottom) {
      this.loadMoreData()
    }
  }

  loadMoreData = () => {
    console.log('load more ')
    if (this.state.isLoading || !this.props.hasMore) {
      return
    }

    this.setState({
      isLoading: true
    })

    getRecommendList(this.props.city, 0)
    .then((json) => {
      if (json.success) {
        this.props.addRecommendList(json.data)
      }
      this.setState({
        isLoading: false
      })
    })
  }

  render() {
    return (
      <div>
        <h2 style={Style.recommendTitle}>猜你喜欢</h2>
        {this.props.list.length 
          ? <RecommendCom list={this.props.list}/>
          : <div>加载中...</div>
        }
        <LoadMore isLoading={this.state.isLoading} hasMore={this.props.hasMore}/> 
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log(state.recommendinfo)
  return {
    city: state.userinfo.city,
    list: state.recommendinfo.list,
    hasMore: state.recommendinfo.hasMore
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateRecommendList: (data) => {
      console.log(data)
      dispatch(ActionRecommendinfo.update(data))
    },
    addRecommendList: (data) => {
      dispatch(ActionRecommendinfo.add(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recommend)