import React, { Component } from 'react'
import Goods from './Goods'

class GoodsList extends Component {
  render() {
    return (
      <div>
        {this.props.list.map((item, index) => {
          return <Goods key={index} {...item} />
        })}
      </div>
    )
  }
}

export default GoodsList