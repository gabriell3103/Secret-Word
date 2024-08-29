// CSS
import './App.css'

// React
import { useCallback, useEffect, useState } from 'react';

// Data
import {wordsList} from "./data/words"

// Components
import StartScreen from './components/StartScreen';
import GameOver from './components/GameOver';
import Game from './components/Game';
  
const stages = [
      {id: 1, name: "start"},
      {id: 2, name: "game"},
      {id: 3, name: "end" }
    ]

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)
  
  return (
    <div className='App'>
      {gameStage === "start" && <StartScreen />}
      {gameStage === "start" && <Game />}
      {gameStage === "start" && <GameOver />}
    </div>
  )
}

export default App
