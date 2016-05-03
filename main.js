import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './views/components/navbar.jsx';
import Top from './views/components/top.jsx';
import Content from './views/components/content.jsx';

class Main extends React.Component {
  render() {
    return (
      <div>
      <Navbar />
      <Top />
      <Content />
      </div>
    )
  }
};

ReactDOM.render(<Main />, document.getElementById('app'));
