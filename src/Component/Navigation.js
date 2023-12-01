import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navbar">
      <div className="logo">Sharpe Labs Assignment</div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/transaction">Transaction</Link>
        </li>
        <li>
          <Link to="/data">Data</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
