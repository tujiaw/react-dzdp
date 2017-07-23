import React, { Component } from 'react'
import { CROSS_DOMAIN } from '../../config'
import Style from './style'

class RecommendItem extends Component {
  render() {
    // 去掉最后一个item的分割线
    if (this.props.last) {
      Style.item.borderBottom = '0px'
    }

    return (
      <div style={Style.root}>
        <div style={Style.item}>
          <div>
            <img style={Style.image} src={ CROSS_DOMAIN + this.props.img } />
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

export default RecommendItem