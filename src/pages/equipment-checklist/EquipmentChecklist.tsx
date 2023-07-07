import MageTable from "./Mage/components/MageTable";
import MeleeTable from "./Melee/components/MeleeTable";
import RangeTable from "./Range/components/RangeTable";

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
