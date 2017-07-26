import React, { Component } from 'react'
import Style from './style'

class CityList extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      currentCity: ''
    }
  }

  onClick = (item) => {
    if (this.state.currentCity !== item) {
      this.props.onChanged(item)
      this.setState({ currentCity: item })
    }
  }

  render() {
    return (
      <div style={Style.root}>
        <span style={Style.hotCity}>热门城市</span>
        <div style={Style.cityList}>
          { this.props.cityList.map((item, index) => {
            return <div key={index} style={Style.city} onClick={ () => {this.onClick(item)} }>
              <span style={Style.title}>{item}</span>
            </div>
          })}
        </div>
      </div>
    )
  }
}

export default CityList