import React from 'react'

class Space extends React.Component {
  render() {
    const { fixedWidth, fixedHeight } = this.props;
    const Style = {
      minWidth: fixedWidth || 8,
      maxWidth: fixedWidth || 8,
      minHeight: fixedHeight || 8,
      maxHeight: fixedHeight || 8,
    }
    return (
      <div style={Style}></div>
    );
  }
}

export default Space;