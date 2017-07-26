import React, { Component } from 'react'
import { connect } from 'react-redux'

class User extends Component {
  render() {
    return (
      <div>
        user
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

export default connect(mapStateToProps, mapDispatchToProps)(User)