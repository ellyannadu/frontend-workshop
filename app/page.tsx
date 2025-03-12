import React from 'react';
import './styles.css';
const Page = () => {
  return (
    <div>
      <div className="header"></div>
      <h2>Pokedex</h2>

      <div className="main">
        <h1>Catch &apos;Em All!</h1>
        <p>Explore with our interactive Pokedex!</p>
      </div>

      <button id="view-pokedex">View Pokedex</button>
    </div>
  );
};

export default Page;
