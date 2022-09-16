import React, { useState } from 'react';
import './App.css';
import AddToList from './componets/AddToList';
import List from './componets/List';

export interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}
function App() {
  const [people, setPeople] = useState<IState['people']>([
    {
      name: 'LeBron James',
      age: 35,
      url: 'https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png',
      note: 'Allegeric to staying on the same team',
    },
    {
      name: 'Kobe Bryant',
      age: 42,
      url: 'https://www.pngall.com/wp-content/uploads/2/Actor-Leonardo-DiCaprio-PNG-Free-Download.png',
      note: 'Allegeric to staying on the same team',
    },
  ]);

  return (
    <div className="App">
      <h1> People invited to my party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
