import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import React from "react";

import Adapter from "./pattern/adapter/paymentAdpter";

function App() {
  //implement strategy pattern

  return (
    <div className="flex gap-3 justify-center my-4 ">
      <Adapter />
    </div>
  );
}

export default App;
