import "./App.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Airplanes from "./pattern/mediator/airplanes";
function App() {
  return (
    <div>

    <Airplanes />
    <ToastContainer />
    </div>
  );
}

export default App;
