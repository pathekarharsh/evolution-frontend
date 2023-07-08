import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css'; // CSS file for styling

const Card = ({ image, title, buttonLabel, to }) => (
  <div className="card">
    <img src={image} alt={title} />
    <h2>{title}</h2>
    <Link to={to} className='btn'>{buttonLabel}</Link>
  </div>
);

const App = () => {
  return (
    <div className="cont">
      <Card
        image="https://via.placeholder.com/200x200.png?text=Team"
        title="Team"
        buttonLabel="Login"
        to="/login-team"
      />
      <Card
        image="https://via.placeholder.com/200x200.png?text=Team"
        title="Register for Event"
        buttonLabel="Register"
        to="/register"
      />
      <Card
        image="https://via.placeholder.com/200x200.png?text=Team"
        title="Scan From Here"
        buttonLabel="Scan"
        to="/login-scan"
      />
    </div>
  );
};

export default App;
