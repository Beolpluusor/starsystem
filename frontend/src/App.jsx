import { useState } from 'react'
import StarSystems from "./components/starsystems.jsx"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <h1>star systems listed</h1>
          <StarSystems />

      </div>
    </>
  )
}

export default App
