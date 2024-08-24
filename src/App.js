import "./App.css";
import ChainClass from "./pattern/chainResponsibility/ChainClass";

import ChainZustand from "./pattern/chainResponsibility/ChainZustand";
import Modal from "./pattern/modal";
import { ShowExampleList } from "./pattern/showList";

function App() {
  return (
    <div>
      <Modal position={"top"}>
        {" "}
        <ShowExampleList />
        
      </Modal>
      <ChainZustand />
      <ChainClass />
    </div>
  );
}

export default App;
