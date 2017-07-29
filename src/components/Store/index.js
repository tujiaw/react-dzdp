import React from 'react';
import Style from './style'
import Star from '../Star'

class Store extends React.Component {
  render() {
    const { data } = this.props
    return (
      <div style={Style.root}>
        <div style={Style.top}>
          <img style={Style.image} alt="" src={ data.img }/>
          <div style={Style.topRight}>
            <div style={Style.title}>{data.title}</div>
            <div style={Style.topMid}>
              <Star count={data.star} />
              <div style={Style.price}>{'¥' + data.price}</div>
            </div>
            <div style={Style.subTitle}>{data.subTitle}</div>
          </div>
        </div>
        <p style={Style.desc} dangerouslySetInnerHTML={{__html:data.desc}}/>
      </div>
    );
  }
}

export default Store
