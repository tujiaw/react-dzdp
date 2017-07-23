import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAdData } from '../../../fetch/home'
import AdList from '../../../components/AdList'
import * as ActionAdinfo from '../../../actions/adinfo'

class Ad extends Component {
  constructor(props, context) {
    super(props, context)
  }

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
          ? <AdList data={this.props.adinfo.data}/> 
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