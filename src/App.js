
import React from "react"
import './index.css';
import Button  from "./Button";
const App = () =>
{
  return (
  <div  style={{textAlign: 'center'}}>
  <h1 >Hello World</h1>
  <Button title="click"/>
  <Button title="don't click"/>
  <Button />
    </div>);
}
 export default App;
