import "./App.css";
import Modal from "./pattern/modal";
import { ShowExampleList } from "./pattern/showList";

function App() {
  return (
    <div>
      <Modal position={"top"}>
        {" "}
        <ShowExampleList />
      </Modal>
    </div>
  );
}

export default App;
