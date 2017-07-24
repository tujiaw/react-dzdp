import React, { Component } from 'react';
import Style from './style'
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <div style={Style.root}>
        <div style={Style.left}>
          <Link to="/city" style={Style.cityLink}>
            {this.props.cityName}{' '}
          </Link>
          <i className="icon-angle-down"></i>
        </div>
        <div style={Style.mid}>
            <i style={Style.iconSearch} className="icon-search"></i>
            <input style={Style.input} type="text" placeholder="请输入关键字"/>
        </div>
        <div style={Style.right}>
          <i className="icon-user"></i>
        </div>
      </div>
    )
  }
}

export default Header;