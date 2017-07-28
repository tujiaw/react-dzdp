import React, { Component } from 'react'
import Style from './style'

class Goods extends Component {
  render() {
    return (
      <div style={Style.root}>
        <div style={Style.item}>
          <div>
            <img style={Style.image} src={ this.props.img } alt=""/>
          </div>
          <div style={Style.right}>
            <div style={Style.rightTop}>
              <span style={Style.title}>{this.props.title}</span>
              <span style={Style.distance}>{this.props.distance}</span>
            </div>
            <div>
              <span style={Style.subtitle}>{this.props.subTitle}</span>
            </div>
            <div style={Style.rightBottom}>
              <span style={Style.price}>{'¥' + this.props.price}</span>
              <span style={Style.number}>{'已售' + this.props.mumber}</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Goods