import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css'; // CSS file for styling
import Team from "../asset/partners.png";
import Register from "../asset/membership.png";
import Scan from "../asset/qr-code.png";

const Card = ({ image, title, buttonLabel, to }) => (
  <div className="card">
    <img src={image} alt={title} className='card_img'/>
    <h2>{title}</h2>
    <Link to={to} className='btn'>{buttonLabel}</Link>
  </div>
);

const App = () => {
  return (
    <div className="cont">
      <Card
        image={Team}
        title="Team"
        buttonLabel="Login"
        to="/login-team"
      />
      <Card
        image={Register}
        title="Register for Event"
        buttonLabel="Register"
        to="/register"
      />
      <Card
        image={Scan}
        title="Scan From Here"
        buttonLabel="Scan"
        to="/login-scan"
      />
    </div>
  );
};

export default App;
