import { useState } from 'react';
import './App.css';
import Board from './components/Board/Board'
import { GameContext } from './assets/GameContext';

function App() {
  const [value, setValue] = useState("X");
  const [board, setBoard] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState(null);

  return (
    <div className="App">
      <GameContext.Provider value={{ value, setValue, board, setBoard, winner, setWinner}}>
        <h1>Welcome <span>Player</span></h1>
        <Board />
        <button className='restart'>RESTART GAME</button>
      </GameContext.Provider>
    </div>
  );
}

export default App;
