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

  const [pickedWord, setPickedWord] = useState("")
  const [pickedCategory, setPickedCategory] = useState("")
  const [letter, setLetter] = useState([])

  const pickWordAndCategory = () =>{
    // pick a random category
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]
    
    // pick a random word
    const word = words[category][Math.floor(Math.random() * words[category].length)]

    return {word, category}
  }

  // Starts the secret word game
  const startGame = () => {
    // pick word and pick category
    const {word, category} = pickWordAndCategory()
    
    // create an array of letters
    let wordsLetters = word.split("")
    wordsLetters = wordsLetters.map((l) => l.toLowerCase())

    // fill states
    setPickedWord(word)
    setPickedCategory(category)
    setLetter(wordsLetters)


    setGameStage(stages[1].name)
  }
  
  // process the letter inputs
  const verifyLetter = () => {
    setGameStage(stages[2].name)
  }

  // restarts the game
  const retry = () => {
    setGameStage(stages[0].name)
  }

  return (
    <div className='App'>
      {gameStage === "start" && <StartScreen startGame={startGame}/>}
      {gameStage === "game" && <Game verifyLetter={verifyLetter}/>}
      {gameStage === "end" && <GameOver retry={retry}/>}
    </div>
  )
}

export default App
