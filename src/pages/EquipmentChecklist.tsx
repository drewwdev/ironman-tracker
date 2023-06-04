import MageTable from "../components/EquipmentChecklist/Mage/MageTable";
import MeleeTable from "../components/EquipmentChecklist/Melee/MeleeTable";
import RangeTable from "../components/EquipmentChecklist/Range/RangeTable";

function EquipmentChecklist() {
  return (
    <div className="flex pt-24">
      <MeleeTable />
      <MageTable />
      <RangeTable />
    </div>
  );
}

export default EquipmentChecklist;
