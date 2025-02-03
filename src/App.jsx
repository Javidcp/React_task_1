import { useState } from "react";
import './App.css'


const App = () => {
  const [color, setColor] = useState(false)

  const changeColor = () => {
    setColor((oldOne) => !oldOne);
    document.body.style.backgroundColor = color ? "white" : "black";
  }

  return (
    <>
      <button onClick={changeColor}>
        { color ? "Change Theme to White" : "Change Theme to Dark" }
      </button>
    </>
  )
}

export default App