import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Team from './Team'
import Users from './Users'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>React Core Concepts 2</h2>
      <Users></Users>
      <Team></Team>
    
    </>
  )
}

export default App
