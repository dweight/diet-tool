import React from 'react';
import Header from './Header';
import Nav from './Nav';

class App extends React.Component {

  render() {
    return(
      <div>
      <Header />
      <Nav />
      {this.props.children}
      </div>
    )
  }
}

export default App;
