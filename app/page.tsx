import React from 'react';
import './styles.css';
const Page = () => {
  return (
    <div>
      <div className="header"></div>
      <h2>Pokedex</h2>

      <div className="container">
        <img src={"pokedex.png"} alt="poke" />
        <div className="main">
          <h1>Catch &apos;Em All!</h1>
          <p>Explore with our interactive Pokedex!</p>
          <button id="view-pokedex">View Pokedex</button>
        </div>
      </div>

    </div>
  );
};

export default Page;
