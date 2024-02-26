import "./App.css";
import { DevilFruitsList } from "./components/DevilFruitsList.tsx";
import { Form } from "./components/Form.tsx";

function App() {
  return (
    <div className="app">
      <div className="form-section">
        <Form />
      </div>
      <div className="list-section">
        <div></div>
        <DevilFruitsList />
      </div>
    </div>
  );
}

export default App;
