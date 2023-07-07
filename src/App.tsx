import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import EquipmentChecklist from "./pages/equipment-checklist/EquipmentChecklist";
import Overview from "./pages/overview/Overview";
import GeneralProgressionGoals from "./pages/general-progression-goals/GeneralProgressionGoals";
import BossGoals from "./pages/boss-goals/BossGoals";
import { navbarItems } from "./data/navbarItems";

function App() {
  return (
    <div className="flex">
      <Navbar />
      <Routes>
        <Route
          path={navbarItems.equipmentChecklist.path}
          element={<EquipmentChecklist />}
        />
        <Route path={navbarItems.overview.path} element={<Overview />} />
        <Route
          path={navbarItems.generalProgressionGoals.path}
          element={<GeneralProgressionGoals />}
        />
        <Route path={navbarItems.bossGoals.path} element={<BossGoals />} />
      </Routes>
    </div>
  );
}

export default App;
