import React from "react"
import './App.css'
import Die from "./Die"

export default function App() {
  const [dice, setDice] = React.useState(allNewDice())

  function allNewDice() {
    const newDiceArr = []
    for(let i = 0; i < 10; i++) {
      let randomNumber = Math.floor(Math.random() * 6)
      newDiceArr.push(randomNumber)
    }

    return newDiceArr
  }

  const diceElements = dice.map(die => <Die value={die} />)

  return (
    <main>
      <div className="dice-container">
        {diceElements}
      </div>
    </main>
  )
}