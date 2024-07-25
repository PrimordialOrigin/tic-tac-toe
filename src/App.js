import { useEffect, useState } from 'react';
import './App.css';
import Board from './components/Board/Board'
import { GameContext } from './assets/GameContext';

function App() {
  const [value, setValue] = useState("X");
  const [board, setBoard] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState(null);

  const calculateWinner = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for ( let  i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null
  }

  useEffect(() => {
    const winner = calculateWinner(board);
    if(winner) {
      setWinner(winner);
    }
  }, [board]);

  const restartGame = () => {
    setBoard(Array(9).fill(null));
    setWinner(null);
    setValue("X")
  }
  

  return (
    <div className="App">
      <GameContext.Provider value={{ value, setValue, board, setBoard, winner, setWinner}}>

        <h1>Welcome <span>Player</span></h1>
        {winner && <h2>Winner: {winner} </h2>}
        <Board />
        <button 
        className='restart' 
        onClick={restartGame}>
          RESTART GAME
        </button>
      
      </GameContext.Provider>
    </div>
  );
}

export default App;
