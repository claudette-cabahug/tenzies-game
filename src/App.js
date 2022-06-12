import React from "react"
import './App.css'
import Die from "./Die"
import { nanoid } from "nanoid"

export default function App() {
  // 2
  const [dice, setDice] = React.useState(allNewDice())

  // 1
  function allNewDice() {
    const newDiceArr = []
    for(let i = 0; i < 10; i++) {
      let randomNumber = Math.floor(Math.random() * 6)
      newDiceArr.push({
        value: randomNumber,
        isHeld: false,
        id: nanoid()
      })
    }

    return newDiceArr
  }

  // 4
  function rollDice() {
    setDice(allNewDice())
  }

  // 5 & 6
  function holdDice(id) {
    setDice(oldDiceArr => oldDiceArr.map(die => {
      return  die.id === id ? 
        {...die, isHeld: !die.isHeld} :
        die
    }))
  }

  // 3
  const diceElements = dice.map(die => (
    // 5
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