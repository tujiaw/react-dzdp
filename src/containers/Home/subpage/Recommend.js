import React, { Component } from 'react'
import { connect } from 'react-redux'
import RecommendCom from '../../../components/Recommend'
import { getRecommendList } from '../../../fetch/home'
import * as ActionRecommendinfo from '../../../actions/recommendinfo'
import Style from './style'

class Recommend extends Component {
  componentDidMount() {
    getRecommendList(this.props.city, 0)
    .then((json) => {
      if (json.success) {
        this.props.updateRecommendList(json.data)
      }
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
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log(state.recommendinfo)
  return {
    city: state.userinfo.city,
    list: state.recommendinfo.list
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateRecommendList: (data) => {
      console.log(data)
      dispatch(ActionRecommendinfo.update(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recommend)