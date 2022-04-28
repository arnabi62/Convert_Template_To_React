
import React from "react"
import Footer from "./Footer";
import Jumpborton from "./Jumpborton";
import NavBar from "./NavBar";
import AppSection from "./AppSection"

const App = () =>
{
  return (
    <div>
     <NavBar/>
     <Jumpborton/>
      <AppSection/> 
     <Footer/>
    </div>
  );
}
 export default App;
