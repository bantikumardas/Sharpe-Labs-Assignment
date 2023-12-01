import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <h1>Welcome to My React App</h1>
      <p>Explore the different pages of the app:</p>
      <ul>
        <li>
          <Link to="/transaction">Transaction Page</Link>
        </li>
        <li>
          <Link to="/data">Data Page</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
