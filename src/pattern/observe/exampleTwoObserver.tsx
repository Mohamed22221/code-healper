import React from "react";
import {  toast } from 'react-toastify';

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
interface Observer {
  name: string;
  userId: number;
}
const useNotificationObserver = () => {
  const [observers, setObservers] = React.useState<Observer[]>([]);

  const subscribe = (name: string): void => {
    setObservers((observers) => [
      ...observers,
      { name: name, userId: 1 + observers.length },
    ]);
  };

  const notify = (data: any, userId: number) => {
    observers.forEach((observer) => {
      if (observer.userId === userId) {
        toast("Notify : " + observer.name + ":" + data)
      }
    });
  };

  return { subscribe, notify, observers };
};
const ExampleTwoObserver = () => {
  const { observers, subscribe, notify } = useNotificationObserver();
  const userId = 1;
  return (
    <div className="flex flex-col">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          const newName = nameList[Math.floor(Math.random() * nameList.length)];
          subscribe(newName);
        }}
      >
        Add New user
      </button>
      <button
        className="bg-blue-200 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          notify("please update your data", userId);
          
        }}
      >
        Update Data
      </button>
      <div className="flex flex-col">
        {observers.length > 0
          ? observers.map((item) => {
              return <h2 key={item.userId}>{item.name + item.userId}</h2>;
            })
          : "No Customer"}
      </div>
    </div>
  );
};

export default ExampleTwoObserver;
