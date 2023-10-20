import { useState } from "react";


function Counter(){
    const [result, setResult] = useState(0);
    const [ratioChange, setRatioChange] = useState(1);
  
  function addRatio(){
    setResult(result + parseInt(ratioChange));
  }
  function minusRatio(){
    setResult(result - ratioChange);
  }
  function handleRatioChange(kaķēns){
    setRatioChange(kaķēns.target.value);
  }
  
   return (
  <div className="Counter">
    <input type="number" value={ratioChange} onChange={handleRatioChange}></input>
    <br/>
    <button onClick={addRatio}>Button + {ratioChange}</button>
    <button onClick={minusRatio}>Button - {ratioChange}</button>
    <h1>{result}</h1>
  </div>
  
   );
   }
  
  export default Counter;
