import React, { Component } from 'react'
import Style from './style'

class LoadMore extends Component {
  render() {
    return (
      <div style={Style.root}>
        <span style={Style.loadMore}>
          { this.props.hasMore 
            ? (this.props.isLoading ? '加载中...' : '加载更多')
            : '已经扯到底了'
          }
        </span>
      </div>
    )
  }
}

export default LoadMore