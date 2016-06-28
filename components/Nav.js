import React from 'react';
import NavLink from './NavLink';

class Nav extends React.Component {
  render() {
    return (
      <nav className="Navbar">
        <ul>
          <li><NavLink to="/editor"><i className="fa fa-pencil-square-o" aria-hidden="true"></i> Editor</NavLink></li>
          <li><NavLink to="/list"><i className="fa fa-list" aria-hidden="true"></i> List</NavLink></li>
          <li><NavLink to="/stats"><i className="fa fa-bar-chart-o" aria-hidden="true"></i> Stats</NavLink></li>
        </ul>
      </nav>
    )
  }
}

export default Nav;
