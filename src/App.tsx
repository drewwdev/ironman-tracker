import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import EquipmentChecklist from "./pages/EquipmentChecklist";
import Overview from "./pages/Overview";
import GeneralProgressionGoals from "./pages/GeneralProgressionGoals";
import BossGoals from "./pages/BossGoals";

function App() {
  return (
    <>
      <div className="flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/EquipmentChecklist" element={<EquipmentChecklist />} />
          <Route path="/Overview" element={<Overview />} />
          <Route
            path="/GeneralProgressionGoals"
            element={<GeneralProgressionGoals />}
          />
          <Route path="/BossGoals" element={<BossGoals />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
