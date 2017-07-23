import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAdData } from '../../../fetch/home'
import AdCom from '../../../components/Ad'
import * as ActionAdinfo from '../../../actions/adinfo'

class Ad extends Component {
  componentDidMount() {
    getAdData()
    .then((res) => {
      this.props.updateAdinfo(res)
    })
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
    updateAdinfo: (data) => {
      dispatch(ActionAdinfo.update(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Ad)