import React from 'react'
import Star from '../Star'
import Style from './style'

class Item extends React.Component {
  render() {
    return (
      <div style={Style.root}>
        <div style={Style.username}>
          <i className="icon-user"></i>&nbsp;
          {this.props.data.username}
        </div>
        <Star count={this.props.data.star} />
        <div style={Style.comment}>{this.props.data.comment}</div>
      </div>
    )
  }
}


class CommentList extends React.Component {
  render() {
    return (
      <div>
        {this.props.list.map((item, index) => {
          return <Item key={index} data={item}/>
        })}
      </div>
    );
  }
}

export default CommentList