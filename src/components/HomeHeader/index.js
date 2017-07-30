import React, { Component } from 'react';
import Style from './style'
import { Link } from 'react-router-dom'
import SearchInput from '../SearchInput'

class HomeHeader extends Component {
  render() {
    return (
      <div style={Style.root}>
        <div style={Style.left}>
          <Link to="/city" style={Style.link}>
            {this.props.cityname}{' '}
            <i className="icon-angle-down"></i>
          </Link>
        </div>
        <SearchInput onSearch={this.props.onSearch}/>
        <div style={Style.right}>
          <Link to="/login" style={Style.link}>
            <i className="icon-user"></i>
          </Link>
        </div>
      </div>
    )
  }
}

export default HomeHeader;