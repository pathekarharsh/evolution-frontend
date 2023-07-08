import First from "./Pages/First"
import FirstRegister from "./Pages/FirstRegister"
import ScanLoginPage from "./components/Scan/ScanLogin";
import TeamLogin from "./components/Team/TeamLogin"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<First />} />
        <Route exact path="/register" element={<FirstRegister />} />
        <Route exact path="/login-team" element={<TeamLogin />} />
        <Route exact path="/login-scan" element={<ScanLoginPage />} />
      </Routes>
      
    </div>
  );
}

export default App;
