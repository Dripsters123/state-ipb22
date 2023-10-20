
import Counter from "./Counter";

import Hello from "./Hello";

function App() {
const vardi = ["Kristaps","Mini P.E.K.K.A","Zenta"]
const vardiJSX= vardi.map((theName, index) =>{
  return <Hello defaultName={theName} key={index}/>
})


return(
  <div>
    
  <Counter />
  {vardiJSX}
 </div>
  
)
}

export default App; 
