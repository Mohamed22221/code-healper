import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { Robot, VacuumCleanerStrategy , MopStrategy } from "./pattern/strategy/strategyClass";
import React from "react";

function App() {
  //implement strategy pattern
  let robot = new Robot(new VacuumCleanerStrategy());
  robot.cleanFloor();
  let robotMop = new Robot(new MopStrategy());
  robotMop.cleanFloor();
  return <div>Stratigy Pattern</div>
}

export default App;
