import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Welcome to the Crewmate Collection</h1>
      <img src="../public/images/group.png"/>
    </div>
  )
}

export default App
