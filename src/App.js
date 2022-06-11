import React from "react"
import './App.css'
import Die from "./Die"

export default function App() {
  function allNewDice() {
    const newDiceArr = []
    for(let i = 0; i < 10; i++) {
      let randomNumber = Math.floor(Math.random() * 6)
      newDiceArr.push(randomNumber)
    }

    return newDiceArr
  }
  console.log(allNewDice())

  return (
    <main>
      <div className="dice-container">
        <Die value="1" />
        <Die value="1" />
        <Die value="1" />
        <Die value="1" />
        <Die value="1" />
        <Die value="1" />
        <Die value="1" />
        <Die value="1" />
        <Die value="1" />
        <Die value="1" />
      </div>
    </main>
  )
}