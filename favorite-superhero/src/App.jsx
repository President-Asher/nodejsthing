// src/App.jsx
import React from 'react';
import SuperheroCard from './SuperheroCard';
import './App.css';


function App() {
  // Define your superhero information here (modify with your favorite superhero details)
  const superhero = {
    name: 'Omni-Man',
    description: 'An absolute chad hero. Father of the year. Husband of the year.',
    powers: ['Flying', 'Super Strength', 'Super Endurance', 'Super Speed'],
    quote: 'Are you sure?'
  };


  return (
    <div className="App">
      <h1>My Favorite Superhero</h1>
      <SuperheroCard
        name={superhero.name}
        description={superhero.description}
        powers={superhero.powers}
        quote={superhero.quote}
      />
    </div>
  );
}
export default App;