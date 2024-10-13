import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import Shop from "./pattern/facade";

function App() {


  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-8">Smart Reference Facade Example</h1>
      <Shop />
    </div>
  );
}

export default App;
