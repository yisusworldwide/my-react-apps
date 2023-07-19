import './App.css'
import Clicker from './Clicker.jsx'
import Form from './Form.jsx'
import Counter from './Counter.jsx'
import ColorBoxGrid from './ColorBoxGrid'

// Array containing colors
const colors = [
  "#E53935",
  "#E91E63",
  "#9C27B0",
  "#673AB7",
  "#3F51B5",
  "#2196F3",
  "#03A9F4",
  "#00BCD4",
  "#009688",
  "#4CAF50",
  "#8BC34A",
  "#CDDC39",
  "#FFEB3B",
  "#FFC107",
  "#FF9800",
  "#FF5722",
];

function App() {

  return (
    <>
      <Counter />
      <div>
        {/* <Clicker message="don't touch me mfucker" buttonText="dare you"/>
        <Clicker message="not caring what you do" buttonText="whatever"/>
        <Clicker message="touch me again baby!" buttonText="horny here"/> */}
      </div>

    </>
  )
}

export default App