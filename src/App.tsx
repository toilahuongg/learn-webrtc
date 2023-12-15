import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Screen from "./components/screen";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Screen />
    </div>
  );
}

export default App;
