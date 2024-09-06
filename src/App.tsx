import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import PriceCard from "./pattern/strategy/priceCard";
import StandardPriceStrategy from "./pattern/strategy/strategyCards/StandardPriceStrategy";
import VietnamPriceStrategy from "./pattern/strategy/strategyCards/VietnamPriceStrategy";
import JapanPriceStrategy from "./pattern/strategy/strategyCards/JapanPriceStrategy";

function App() {
  //implement strategy pattern

  return (
    <div className="flex gap-3 justify-center my-4 ">
      <PriceCard price={100} strategy={new StandardPriceStrategy()} />
      <PriceCard price={13200} strategy={new VietnamPriceStrategy()} />
      <PriceCard price={103240} strategy={new JapanPriceStrategy()} />
    </div>
  );
}

export default App;
