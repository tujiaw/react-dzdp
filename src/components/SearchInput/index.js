import React from 'react';
import Style from './style'

class SearchInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputText: ''
    }
  }

  onChange = (e) => {
    this.setState({ inputText: e.target.value })
  }

  onKeyUp = (e) => {
    if (e.keyCode !== 13 || this.state.inputText.trim().length === 0) {
      return
    }
    this.props.onSearch(this.state.inputText)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ inputText: nextProps.inputText || '' })  
  }

  render() {  
    return (
      <div style={Style.root}>
        <i style={Style.iconSearch} className="icon-search"></i>
        <input style={Style.input} type="text" placeholder="请输入关键字" 
          value={this.state.inputText} 
          onChange={this.onChange}
          onKeyUp={this.onKeyUp}/>
      </div>
    );
  }
}

export default SearchInput;