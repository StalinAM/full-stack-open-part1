import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = ({ good, neutral, bad }) => {

  const setPositive = () => {
    const result = (good / (good + neutral + bad)) * 100
    return `${result.toFixed(2)}% `
  }
  const setAverage = () => {
    const result = (good - bad) / (good + neutral + bad)
    return result.toFixed(2)
  }
  return (
    <>
      <Statistic text={"good"} value={good} />
      <Statistic text={"neutral"} value={neutral} />
      <Statistic text={"bad"} value={bad} />
      <Statistic text={"all"} value={good + neutral + bad} />
      <Statistic text={"average"} value={setAverage()} />
      <Statistic text={"positive"} value={setPositive()} />
    </>
  )
}
const Statistic = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}
const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text={'good'} />
      <Button handleClick={() => setNeutral(neutral + 1)} text={'neutral'} />
      <Button handleClick={() => setBad(bad + 1)} text={'bad'} />
      <h2>statistics</h2>
      {good + neutral + bad > 0 ? <table>
        <tbody>
          <Statistics good={good} neutral={neutral} bad={bad} />
        </tbody>
      </table> : <p>No feedback given</p>}
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)