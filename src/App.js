import First from "./Pages/First"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
      <Route exact path="/" element={<First />} />
      </Routes>
      
    </div>
  );
}

export default App;
