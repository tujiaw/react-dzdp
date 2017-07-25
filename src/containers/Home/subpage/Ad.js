import React, { Component } from 'react'
import { connect } from 'react-redux'
import AdCom from '../../../components/Ad'
import * as ActionAdinfo from '../../../actions/adinfo'

class Ad extends Component {
  componentDidMount() {
    this.props.getIfNeedAsync()
  }

  render() {
    return (
      <div>
        {this.props.adinfo.success 
          ? <AdCom data={this.props.adinfo.data}/> 
          : <div>加载中...</div>}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    adinfo: state.adinfo
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getIfNeedAsync: () => {
      dispatch(ActionAdinfo.getIfNeedAsync())
    },
    updateAdinfo: (data) => {
      dispatch(ActionAdinfo.update(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Ad)