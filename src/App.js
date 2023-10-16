import { useState } from "react";

function App() {

  const [result, setResult] = useState(0);

function addRatio(){
  setResult(result + 1);
  console.log("x ir "+ result)
}
function minusRatio(){
  setResult(result - 1);
  console.log("funkcija izsaukta");
  console.log("x ir "+ result)
}

 return (
<div className="App">
  <input></input>
  <button onClick={addRatio}>Button +1</button>
  <button onClick={minusRatio}>Button - 1</button>
  <h1>{result}</h1>
</div>
 );
}

export default App;
