import logo from './logo.svg';
import './App.css';
import Header from './Header.js'
import Moves from './Moves.js'
import PopUp from './PopUp.js'

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Header></Header>
        <Moves></Moves>
      </div>
      <div className='popBox'>
        <PopUp/>
      </div>
    </div>
  );
}

export default App;
