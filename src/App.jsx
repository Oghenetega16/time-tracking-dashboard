import MainCard from "./components/MainCard"
import Card from "./components/Card"
import { useState } from "react"

export default function App() {

  const [timeframe, setTimeframe] = useState('weekly')

  function handleClick(frame) {
    setTimeframe(frame)
  }

  return (
    <main>
      <MainCard handleClick={handleClick} frame={timeframe} />
      <Card frame={timeframe} />
    </main>
  )
}


