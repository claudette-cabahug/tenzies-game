import React from "react"
import './App.css'
import Die from "./Die"
import { nanoid } from "nanoid"
import Confetti from "react-confetti"

export default function App() {

  const [dice, setDice] = React.useState(allNewDice())
  const [tenzies, setTenzies] = React.useState(false)

  React.useEffect(() => {
    const allHeld = dice.every(die => die.isHeld)
    const firstValue = dice[0].value
    const allSameValue = dice.every(die => die.value === firstValue)
    if (allHeld && allSameValue) {
      setTenzies(true)  // game is won
    }
  }, [dice])  // updates state if this is changed

  // helper function
  function generateNewDie() {
    return {
      value: Math.floor(Math.random() * 6), 
      isHeld: false,
      id: nanoid()
    }
  }

  function allNewDice() {
    const newDiceArr = []
    for(let i = 0; i < 10; i++) {
      newDiceArr.push(generateNewDie())
    }

    return newDiceArr
  }

  function rollDice() {
    // game is not won
    if (!tenzies) {
      setDice(oldDice => oldDice.map(die => {
        return die.isHeld ?
          die :
          generateNewDie()
      }))
      // game is won
    } else {
        setTenzies(false)
        setDice(allNewDice())
    }
  }

  function holdDice(id) {
    setDice(oldDiceArr => oldDiceArr.map(die => {
      return  die.id === id ? 
        {...die, isHeld: !die.isHeld} :
        die
    }))
  }

  const diceElements = dice.map(die => (
    // <Die key={die.id} value={die.value} isHeld={die.isHeld} id={die.id} holdDice={die.id} />
    <Die key={die.id} value={die.value} isHeld={die.isHeld} holdDice={() => holdDice(die.id)} />
    ))

  return (
    <main>
      {tenzies && <Confetti />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="dice-container">
        {diceElements}
      </div>
      <button 
        className="roll-dice" 
        onClick={rollDice}
      >
          {tenzies ? "New Game" : "Roll"}
      </button>
    </main>
  )
}