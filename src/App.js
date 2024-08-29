import "./App.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ExampleTwoObserver from "./pattern/observe/exampleTwoObserver";
function App() {
  return (
    <div>

    <ExampleTwoObserver />
    <ToastContainer />
    </div>
  );
}

export default App;
