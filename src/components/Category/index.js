import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactSwipe from 'react-swipe'
import history from '../../utils/history'
import { CATEGORY_LIST } from '../../constants/otherTypes'
import Style from './style'

class Category extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      index: 0
    }
  }

  onItemClick = (text) => {
    history.push('/search/all/' + encodeURIComponent(text))
  }

  render() {
    let opt = {
      auto: 2000,
      callback: (index, elem) => {
        this.setState({ index: index })
      }
    }
    const circleList = [0, 1, 2]

    return (
      <div style={Style.root}>
        <ReactSwipe className="carousel" swipeOptions={opt}>
          {CATEGORY_LIST.map((images, index) => {
            return (
              <div key={index}>
                <ul style={Style.imageList}>
                  {images.map((image, index2) => {
                    return <li key={index2} 
                      style={{...Style.image, backgroundImage:'url(' + image.url + ')'}}
                      onClick={this.onItemClick.bind(this, image.text)}>
                      {image.text}
                    </li>
                  })}
                </ul>
              </div>
            )
          })}
        </ReactSwipe>
        <div style={Style.bottom}>
          <ul style={Style.circleList}>
            {circleList.map((item, index) => {
              return <li key={index} 
                style={this.state.index === index ? Style.selectedCircle : Style.unselectedCircle}>
              </li>
            })}
          </ul>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Category)