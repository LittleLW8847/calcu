import { useState } from 'react';
import './App.css';

function App() {

  const [ioRef, setIoRef] = useState(""); //input output
  const opsSym = ["+", "-", "*", "/"];
  
  const inputSet = (tempVal) => {//for read input from button
    console.log("da input: " + tempVal);
    if(/*ioRef === '' && opsSym.includes(tempVal) ||*/ opsSym.includes(ioRef.slice(-1))){//i want to limit the input of operators, but i can't get the clause to detect.
      return;
    }

    //console.log("is it in the operation set?: " + opsSym.includes(tempVal));
    setIoRef(ioRef + tempVal.target.value)
    //console.log("is it in the operation set?: " + opsSym.includes(tempVal));
    //console.log("can it detect from the string?: " + opsSym.includes(ioRef.slice(-1)));
  };

  const eqFunct = () =>{
    setIoRef(eval(ioRef));
  }

  const clearIo = () => {
    setIoRef("");
  }

  return (
    <div className="App">
      <p className='ioScreen' placeholder='placeholder'>{ioRef || 0}</p>
      <div className='buttonSet'>
        <div className='firstRow'>
          <button onClick={clearIo}>C</button>
          <button value="/" onClick={inputSet}>/</button>
          <button value="*"onClick={inputSet}>X</button>
          <button value="-"onClick={inputSet}>-</button>
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
          <button onClick={eqFunct}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
