import { useState } from "react";
import "./App.css";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [temp, setTemp] = useState(0);

  const handleTemp = (temperature) => {
    setTemp(temperature);
  };
  return (
    <div className="App">
      <Navbar
        title="ReactIsCool"
        nissim="professeur"
        age={18}
        handleTemp={handleTemp}
      />
      <Main temp={temp} />
    </div>
  );
}

export default App;
