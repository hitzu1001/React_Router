import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    const catLinks = this.props.cats.map(cat => (
      <li className="navbar-item" key={cat.name}>
        <NavLink exact to={`/cats/${cat.name}`} className="nav-link">
          {cat.name}
        </NavLink>
      </li>
    ))
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/cats">
          <i className="fas fa-paw"> Cat App</i>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="navbar-item">
              <NavLink exact to='/cats' className="nav-link">Home</NavLink>
            </li>
            {catLinks}
          </ul>
        </div>
      </nav>
    )
  }
}
