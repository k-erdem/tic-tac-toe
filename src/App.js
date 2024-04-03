import './App.css';
import Board from './functions.js';

function App() {
  
  function restart(){
    window.location.reload();
  }

  return (
    <>
      <h1>Hello World!</h1>
      <Board/>
      <button type="button" onClick={ restart }> <span>Restart Game</span> </button> 
    </>
  );
  
}

export default App;

