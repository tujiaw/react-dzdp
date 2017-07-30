import React from 'react'
import Style from './style'

class BorderButton extends React.Component {
  state = {
    isEnter: false
  }

  render() {
    return (
      <button style={this.state.isEnter ? Style.enterButton : Style.button} 
        onClick={this.props.onClick}
        onMouseEnter={() => this.setState({ isEnter: true })}
        onMouseLeave={() => this.setState({ isEnter: false })}>
        {this.props.text}
      </button>
    );
  }
}

export default BorderButton;
