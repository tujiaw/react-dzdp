import React from 'react'
import Style from './style'

const starList = [1, 2, 3, 4, 5]
class Star extends React.Component {
  render() {
    let { count } = this.props
    count = count > starList.length ? starList.length : count
    return (
      <div>
        {starList.map((item, index) => {
          const isLight = (count >= item)
          return <i key={index} className='icon-star' style={isLight ? Style.lightStar : Style.star} />
        })}
      </div>
    );
  }
}

export default Star;