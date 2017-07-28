import React from 'react';
import SearchInput from '../SearchInput'
import Style from './style'
import history from '../../utils/history'

class SearchHeader extends React.Component {
  state = {  }

  onClickBack = () => {
    history.push('/')
  }

  render() {
    return (
      <div style={Style.root}>
        <span onClick={this.onClickBack} style={Style.back}>
          <i className="icon-chevron-left" />
        </span>
        <SearchInput onSearch={this.props.onSearch} inputText={this.props.inputText}/>
      </div>
    )
  }
}

export default SearchHeader;