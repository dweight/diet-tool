import React from 'react';

class Helper extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default Helper;
