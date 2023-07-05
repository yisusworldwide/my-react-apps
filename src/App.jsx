import { useState } from 'react'
import './App.css'
import Clicker from './Clicker.jsx'
import Form from './Form.jsx'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Form/>
      <div><Clicker/></div>

      {/* <div className="card">
        
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}
    </>
  )
}

export default App