import logo from "./logo.svg";
import "./App.css";
import { filterById } from "./helpers/filterById";
import { multiplyBy } from "./helpers/Hofc";
import { returnInteger } from "./helpers/test";

function App() {
  const list = [
    {
      id: 1,
      name: "Steve",
      email: "steve@example.com",
    },
    {
      id: 2,
      name: "John",
      email: "john@example.com",
    },
    {
      id: 3,
      name: "Pamela",
      email: "pam@example.com",
    },
    {
      id: 4,
      name: "Liz",
      email: "liz@example.com",
    },
  ];

  returnInteger()

  return (
    <div className="App">
    
      <header className="App-header">
        {filterById(list, 4).map((item) => {
          return <p>{item.name}</p>;
        })}
      </header>
    </div>
  );
}

export default App;
