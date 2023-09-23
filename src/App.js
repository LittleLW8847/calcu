import { useState } from 'react';
import './App.css';

function App() {

  const [ioRef, setIoRef] = useState(""); //input output
  const [calcResult, setResult] = useState("");//for result
  const opsSym = ["+", "-", "*", "/"];

  const inputSet = (tempVal) => {//for read input from button
  
    if(ioRef === "" && opsSym.includes(tempVal.target.value) || opsSym.includes(ioRef.slice(-1)) && opsSym.includes(tempVal.target.value)){//i want to limit the input of operators, but i can't get the clause to detect.
     return ; 
    }
    setIoRef(ioRef + tempVal.target.value)

    console.log("is it in the operation set?: " + opsSym.includes(tempVal.target.value));
    console.log("can it detect from the string?: " + opsSym.includes(ioRef.slice(-1)));
  };

  const eqFunct = () =>{
    setResult(eval(ioRef));
    setIoRef("");
  }

  const clearIo = () => {
    setIoRef("");
    setResult("");
  }

  return (
    <div className="App">
      <div className='daCalc'>
        <div className='screen'>
          {calcResult? <span>({calcResult})</span>:''}
          {ioRef || 0}
        </div>
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

    </div>
  );
}

export default App;
