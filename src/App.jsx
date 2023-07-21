import './App.css';
import Clicker from './Clicker.jsx';
import Form from './Form.jsx';
import Counter from './Counter.jsx';
import ColorBox from './Colorbox.jsx'
//import ColorBoxGrid from './ColorBoxGrid';

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
      
      <div>
      <ColorBox />
      </div>

    </>
  )
}

export default App