import React from 'react';
import NavLink from './NavLink';

class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <ul>
          <li><NavLink to="/editor">Editor</NavLink></li>
          <li><NavLink to="/list">List</NavLink></li>
          <li><NavLink to="/stats">Stats</NavLink></li>
        </ul>
      </nav>
    )
  }
}

export default Nav;
