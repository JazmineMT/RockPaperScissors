import logo from './logo.svg';
import './App.css';
import Header from './Header.js'
import Moves from './Moves.js'

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Header></Header>
        <Moves></Moves>
      </div>
    </div>
  );
}

export default App;
