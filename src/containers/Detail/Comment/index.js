import React from 'react'
import Style from './style'
import CommentList from '../../../components/CommentList'

class Comment extends React.Component {
  render() {
    return (
      <div style={Style.root}>
        <div style={Style.title}>用户点评</div>
        <CommentList list={this.props.data.list}/>
      </div>
    );
  }
}

export default Comment;