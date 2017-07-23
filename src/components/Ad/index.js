import React, { Component } from 'react'
import { CROSS_DOMAIN } from '../../config'
import Style from './style'

class AdList extends Component {
  render() {
    return (
      <div style={Style.root}>
        <h2 style={Style.top}>超值特惠</h2>
        <div style={Style.bottom}>
          {this.props.data.map((item, index) => {
            return <div key={index} style={Style.imageContainer}>
              <a href={item.link}>
                <img style={Style.image} src={CROSS_DOMAIN + item.img}/>
              </a>
            </div>
          })}
        </div>
      </div>
    )
  }
}

export default AdList