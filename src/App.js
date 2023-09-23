import { useState } from 'react';
import './App.css';

function App() {

  const [ioRef, setIoRef] = useState(""); //input output
  
  const inputSet = (tempVal) => {
    setIoRef(ioRef + tempVal.target.value)
  };

  return (
    <div className="App">
      <p className='ioScreen' placeholder='placeholder'>{ioRef}</p>
      <div className='buttonSet'>
        <div className='firstRow'>
          <button>C</button>
          <button value='/' onClick={inputSet}>/</button>
          <button value='*'onClick={inputSet}>X</button>
          <button value='-'onClick={inputSet}>-</button>
        </div>
        <div className='secondRow'>
          <button value="7" onClick={inputSet}>7</button>
          <button value="8" onClick={inputSet}>8</button>
          <button value="9" onClick={inputSet}>9</button>
          <button value="+" onClick={inputSet}>+</button>
        </div>
        <div className='thirdRow'>
          <button value="4" onClick={inputSet}>4</button>
          <button value="5" onClick={inputSet}>5</button>
          <button value="6" onClick={inputSet}>6</button>
        </div>
        <div className='forthrow'>
          <button value="1" onClick={inputSet}>1</button>
          <button value="2" onClick={inputSet}>2</button>
          <button value="3" onClick={inputSet}>3</button>
        </div>
        <div className='equalButton'>
          <button>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
