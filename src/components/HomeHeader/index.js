import React, { Component } from 'react';
import Style from './style'
import { Link } from 'react-router-dom'

class HomeHeader extends Component {
  render() {
    return (
      <div style={Style.root}>
        <div style={Style.left}>
          <Link to="/city" style={Style.link}>
            {this.props.cityName}{' '}
            <i className="icon-angle-down"></i>
          </Link>
        </div>
        <div style={Style.mid}>
            <i style={Style.iconSearch} className="icon-search"></i>
            <input style={Style.input} type="text" placeholder="请输入关键字"/>
        </div>
        <div style={Style.right}>
          <Link to="/user" style={Style.link}>
            <i className="icon-user"></i>
          </Link>
        </div>
      </div>
    )
  }
}

export default HomeHeader;