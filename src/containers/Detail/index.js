import React from 'react';
import Style from './style'
import SimpleHeader from '../../components/SimpleHeader'
import Store from '../../components/Store'
import BuyAndStore from './BuyAndStore'
import Comment from './Comment'
import * as ActionStore from '../../actions/storeinfo'
import * as ActionComment from '../../actions/commentinfo'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Detail extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params
    this.props.storeAction.getStoreInfo(id)
    this.props.commentAction.getCommentInfo(1, id)
  }

  render() {
    return (
      <div style={Style.root}>
        <SimpleHeader title="商户详情" />
        <div style={Style.scrollWrap}>
          <Store data={this.props.storeinfo} />
          <BuyAndStore />
          <Comment data={this.props.commentinfo} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    storeinfo: state.storeinfo,
    commentinfo: state.commentinfo,
  }
}

function mapDispatchToProps(dispatch) {
  return { 
    storeAction: bindActionCreators(ActionStore, dispatch),
    commentAction: bindActionCreators(ActionComment, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail)
