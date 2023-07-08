import React from 'react';
import './Card.css'; // CSS file for styling

const Card = ({ image, title, buttonLabel }) => (
  <div className="card">
    <img src={image} alt={title} />
    <h2>{title}</h2>
    <button>{buttonLabel}</button>
  </div>
);

const App = () => {
  return (
    <div className="container">
      <Card
        image="https://via.placeholder.com/200x200.png?text=Team"
        title="Team"
        buttonLabel="Login"
      />
      <Card
        image="https://via.placeholder.com/200x200.png?text=Team"
              title="Register for Event"
        buttonLabel="Register"
      />
      <Card
        image="https://via.placeholder.com/200x200.png?text=Team"
        title="Scan From Here"
        buttonLabel="Scan"
      />
    </div>
  );
};

export default App;
