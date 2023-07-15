import './App.css'
import Clicker from './Clicker.jsx'
import Form from './Form.jsx'

function App() {

  return (
    <>
      <Form/>
      <div>
        <Clicker message="don't touch me mfucker" buttonText="dare you"/>
        <Clicker message="not caring what you do" buttonText="whatever"/>
        <Clicker message="touch me again baby!" buttonText="horny here"/>
      </div>

    </>
  )
}

export default App