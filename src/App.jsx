import { useState } from "react"
import Card from "./components/Card"
import ThanksCard from "./components/ThanksCard"

function App() {
  const [showThanks,setShowThanks] = useState([false]);
  console.log(showThanks)
  return (
    <div>
      {
        !showThanks[0] ? <Card showThanksHandler = {setShowThanks}/>:<ThanksCard rating={showThanks[1]}/>
      }

    </div>
  )
}

export default App
