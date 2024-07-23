import { useState } from 'react';
import './App.css';
import Board from './components/Board/Board'
import { GameContext } from './assets/GameContext';

function App() {
  const [value, setValue] = useState("X");
  const [board, SetBoard] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState(null);

  return (
    <div className="App">
      <GameContext.Provider value={{ value, setValue, board, SetBoard, winner, setWinner}}>
        <Board />
      </GameContext.Provider>
    </div>
  );
}

export default App;
