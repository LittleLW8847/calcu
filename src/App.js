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
    if(ioRef === "" || opsSym.includes(ioRef.slice(-1))){
      return;
    }
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
          {calcResult > 0? <span>({calcResult})</span>:''}
          {ioRef || 0}
        </div>
        <div className='buttonSet'>
          
            <button onClick={clearIo} className='daButton'>C</button>
            <button value="/" onClick={inputSet} className='daButton'>/</button>
            <button value="*"onClick={inputSet} className='daButton'>X</button>
            <button value="-"onClick={inputSet} className='daButton'>-</button>
         
            <button value="7" onClick={inputSet} className='daButton'>7</button>
            <button value="8" onClick={inputSet} className='daButton'>8</button>
            <button value="9" onClick={inputSet} className='daButton'>9</button>
            <button value="+" onClick={inputSet} className='daButton'>+</button>
         
           <button value="4" onClick={inputSet} className='daButton'>4</button>
           <button value="5" onClick={inputSet} className='daButton'>5</button>
           <button value="6" onClick={inputSet} className='daButton'>6</button>
           <button onClick={eqFunct} className='eqButton'>=</button>
         
           <button value="1" onClick={inputSet} className='daButton'>1</button>
           <button value="2" onClick={inputSet} className='daButton'>2</button>
           <button value="3" onClick={inputSet} className='daButton'>3</button>
           

           

      </div>
      </div>

    </div>
  );
}

export default App;
