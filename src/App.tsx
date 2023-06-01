import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import EquipmentChecklist from "./pages/EquipmentChecklist";

function App() {
  return (
    <>
      <div className="flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/EquipmentChecklist" element={<EquipmentChecklist />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
