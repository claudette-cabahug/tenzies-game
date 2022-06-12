import React from "react"
import './App.css'
import Die from "./Die"
import { nanoid } from "nanoid"

export default function App() {
  const [dice, setDice] = React.useState(allNewDice())

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
    setDice(oldDice => oldDice.map(die => {
      return die.isHeld ?
        die :
        generateNewDie()
    }))
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
      <div className="dice-container">
        {diceElements}
      </div>
      <button className="roll-dice" onClick={rollDice}>Roll</button>
    </main>
  )
}