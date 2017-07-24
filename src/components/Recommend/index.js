import React, { Component } from 'react'
import RecommendItem from './recommendItem'

class RecommendCom extends Component {
  render() {
    const count = this.props.list.length
    return (
      <div>
        {this.props.list.map((item, index) => {
          return <RecommendItem key={index} {...item} />
        })}
      </div>
    )
  }
}

export default RecommendCom