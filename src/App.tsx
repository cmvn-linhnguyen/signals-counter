import "./App.css";
import { Counter } from "./components/Counter";
import { SignalsCounter } from "./components/SignalsCounter";

function App() {
  return (
    <div className="App">
      <Counter />
      <hr style={{ borderTop: "3px solid #bbb" }} />
      <SignalsCounter />
    </div>
  );
}

export default App;
