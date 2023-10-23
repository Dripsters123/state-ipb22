import Counter from "./Counter";
import Check from "./Check";
import Hello from "./Hello";

function App() {
  const ratios = [7,43,101];
  const ratiosJSX = ratios.map((theRatios, indexx)=>{
    return <Counter defaultRatios={theRatios} key = {indexx}/>
  })

const vardi = ["Kristapus","Mini P.E.K.K.A","Ositis"];
const vardiJSX = vardi.map((theName, index) =>{
  return <Hello defaultName={theName} key={index}/>
  
})
const check = [false];

return(
  <div>
    
  {ratiosJSX}
  {vardiJSX}
  <Check checkValue={check[0]}/>
 </div>
  
)
}

export default App; 
