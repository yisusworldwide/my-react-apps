import { useState } from 'react'
import './App.css'
import Clicker from './Clicker.jsx'
import Form from './Form.jsx'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Form/>
      <div>
        <Clicker message="don't touch me mfucker" buttonText="dare you"/>
        <Clicker message="not caring what you do" buttonText="whatever"/>
        <Clicker message="touch me again baby!" buttonText="horny here"/>
      </div>


      {/* <div className="card">
        
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}
    </>
  )
}

export default App