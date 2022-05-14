
import React, {useState} from "react"
import "./App.css"


const App = () =>
{
  const [count, setCount] = useState(0)

  return (
    <div>
    <h2>Current value of count : {count}</h2>
    <br/>
    <button onClick ={()=> setCount(0)}>Reset</button>
    <button onClick = {()=> count >=10 ?"":setCount(count+1)}>Increase</button>
    <button onClick = {()=> count<=0?"":setCount(count-1)}>Decrease</button>
    </div>
  );
}
 export default App;
