import { useState } from 'react'
import './App.css'
import Team from './Team'
import Users from './Users'
import Albums from './Albums'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>React Core Concepts 2</h2>
      <Albums></Albums>
      <Users></Users>
      <Team></Team>
    
    </>
  )
}

export default App
