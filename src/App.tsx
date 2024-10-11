import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import React from "react";


import AppTerrain from "./pattern/flyweight/Flyweight";
import Game from "./pattern/flyweight/FlyWeightTwo";

function App() {
  //implement strategy pattern

  return (
    <div className=" my-4 ">
      {/* <AppTerrain /> */}
      <Game />
    </div>
  );
}

export default App;
