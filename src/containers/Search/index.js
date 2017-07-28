import React from 'react';
import SearchHeader from '../../components/SearchHeader'
import GoodsList from '../../components/GoodsList'
import { connect } from 'react-redux'
import * as ActionSearchinfo from '../../actions/searchinfo'
import { bindActionCreators } from 'redux'
import Style from './style'

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputText: ''
    }
  }

  onSearch = (text) => {
    this.props.history.push('/search/all/' + encodeURIComponent(text))
  }

  onKeywordChanged = (keyword) => {
    this.setState({ inputText: keyword })
    this.props.searchinfoAction.getIfNeedAsync(keyword)
  }

  componentWillReceiveProps(nextProps) {
    const oldKeyword = this.props.match.params.keyword
    const newKeyword = nextProps.match.params.keyword
    if (oldKeyword !== newKeyword) {
      this.onKeywordChanged(newKeyword)
    }
  }

  componentDidMount() {
    console.log(this.props)
    const { keyword } = this.props.match.params
    this.onKeywordChanged(keyword)
  }

  render() {
    return (
      <div style={Style.root}>
        <SearchHeader inputText={this.state.inputText} onSearch={this.onSearch}/>
        <div style={Style.listWrap}>
          <GoodsList list={this.props.searchinfo.list}/>
        </div>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    searchinfo: state.searchinfo
  }
}

function mapDispatchToProps(dispatch) {
  return { 
    searchinfoAction: bindActionCreators(ActionSearchinfo, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)