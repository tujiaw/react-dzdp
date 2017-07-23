import React, { Component } from 'react'
import { connect } from 'react-redux'

class Recommend extends Component {
  render() {
    return (
      <div>
        推荐列表
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Recommend)