import React, { Component } from 'react'
import { connect } from 'react-redux'

class NotFound extends Component {
  render() {
    return (
      <div>
        404
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

export default connect(mapStateToProps, mapDispatchToProps)(NotFound)