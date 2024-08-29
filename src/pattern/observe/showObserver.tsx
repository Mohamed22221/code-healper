import React from "react";
import { Product } from "./observClass";
var nameList = [
  "Time",
  "Past",
  "Future",
  "Dev",
  "Fly",
  "Flying",
  "Soar",
  "Soaring",
  "Power",
  "Falling",
  "Fall",
  "Jump",
  "Cliff",
  "Mountain",
  "Rend",
  "Red",
  "Blue",
  "Green",
  "Yellow",
  "Gold",
  "Demon",
  "Demonic",
  "Panda",
  "Cat",
];
const ShowObserver = () => {
  const product = new Product();
  const [customers, setCustomers] = React.useState<string[]>([]);
  
  return (
    <div className="flex flex-col">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          const newName = nameList[Math.floor(Math.random() * nameList.length)];
          product.addObserver(newName.toString());

          console.log(product.getObservers.map((item) => item));
        }}
      >
        Add New Customer
      </button>
      <button
        className="bg-blue-200 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          product.notifyObservers();

        }}
      >
        Send Notification{" "}
      </button>
      <div className="flex flex-col">
        {customers.length > 0 ?customers.map((item) => {
          return  <h2>{item}</h2>
        }) : "No Customer"}
        
      </div>
      <div>
        <h2>{product.Notify.map((item) => item)}</h2>
      </div>
    </div>
  );
};

export default ShowObserver;
