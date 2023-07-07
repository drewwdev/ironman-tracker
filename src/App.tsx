import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import EquipmentChecklist from "./pages/equipment-checklist/EquipmentChecklist";
import Overview from "./pages/overview/Overview";
import GeneralProgressionGoals from "./pages/general-progression-goals/GeneralProgressionGoals";
import BossGoals from "./pages/boss-goals/BossGoals";
function App() {
  return (
    <div className="flex">
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
  );
}

export default App;
