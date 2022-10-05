import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import "./App.css"
import { originals,action,romance } from "./urls";
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
function App() {
  return (
   <div>
    <NavBar/>
    <Banner/>
    <RowPost url={originals} title="Netflix Original"/>
    <RowPost url={action} title="Action" isSmall/>
    <RowPost url={romance} title="Romance" isSmall/>


   </div>
  );
}

export default App;
