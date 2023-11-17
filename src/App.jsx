import { useState } from 'react';
import './App.css';
import { Welcome } from './components/Welcome/Welcome';
import { Game } from './components/Game/Game';

function App() {
  const [game, setGame] = useState(true);
  return (
    <>
      <div className='w-full h-full min-h-screen bg-gray-100 flex items-center'>
        {game ? <Welcome handleGame={setGame} /> : <Game setGame={setGame} />}
      </div>
    </>
  );
}

export default App;
