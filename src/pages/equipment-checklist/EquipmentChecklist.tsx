import MageTable from "./components/Mage/MageTable";
import MeleeTable from "./components/Melee/MeleeTable";
import RangeTable from "./components//Range/RangeTable";

function EquipmentChecklist() {
  return (
    <div className="flex flex-wrap">
      <MeleeTable />
      <MageTable />
      <RangeTable />
    </div>
  );
}

export default EquipmentChecklist;
