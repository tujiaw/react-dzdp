import React, { Component } from 'react'
import Style from './style'

class SimpleHeader extends Component {

  onClickBack = () => {
    window.history.back()
  }

  render() {
    return (
      <div style={Style.root}>
        <span onClick={this.onClickBack} style={Style.back}>
          <i className="icon-chevron-left" />
        </span>
        <h1 style={Style.title}>{this.props.title}</h1>
        <div>  </div>
      </div>
    )
  }
}

export default SimpleHeader