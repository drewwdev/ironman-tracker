import "./App.css";
import MageTable from "./components/Mage/MageTable";
import MeleeTable from "./components/Melee/MeleeTable";
import RangeTable from "./components/Range/RangeTable";

function App() {
  return (
    <div className="flex">
      <MeleeTable />
      <MageTable />
      <RangeTable />
    </div>
  );
}

export default App;
