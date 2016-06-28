import React from 'react';
import Login from './Login';
import { Link } from 'react-router';

class Header extends React.Component {
  render() {
    return (
      <header className="Header">
        <Link to="/" onlyActiveOnIndex={true}><img src="#" alt="Diet Tool" className="Logo"/></Link>
        <Login />
      </header>
    )
  }
}

export default Header;
