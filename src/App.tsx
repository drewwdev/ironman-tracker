import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import EquipmentChecklist from "./pages/EquipmentChecklist";
import Overview from "./pages/Overview";

function App() {
  return (
    <>
      <div className="flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/EquipmentChecklist" element={<EquipmentChecklist />} />
          <Route path="/Overview" element={<Overview />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
