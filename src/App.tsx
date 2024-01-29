import "./App.css";
import { Counter } from "./components/Counter";
import { SignalsCounter } from "./components/SignalsCounter";

function App() {
  return (
    <div className="App">
      <Counter />
      <hr className="divided" />
      <SignalsCounter />
    </div>
  );
}

export default App;
