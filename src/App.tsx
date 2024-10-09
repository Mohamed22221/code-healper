import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import React from "react";

import ViewBridgeProduct from "./pattern/bridge/ViewBridgeProduct";

function App() {
  //implement strategy pattern

  return (
    <div className=" my-4 ">
      <ViewBridgeProduct />
    </div>
  );
}

export default App;
