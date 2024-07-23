import './App.css';
import { GameContext } from './assets/GameContext';

function App() {
  return (
    <div className="App">
      <GameContext.Provider>
      </GameContext.Provider>
    </div>
  );
}

export default App;
