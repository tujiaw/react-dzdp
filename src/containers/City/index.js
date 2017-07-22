import React, { Component } from 'react';

class City extends Component {
  onClick = () => {
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        <p>
          City
        </p>
        <button onClick={this.onClick}>go home</button>
      </div>
    )
  }
}

export default City;