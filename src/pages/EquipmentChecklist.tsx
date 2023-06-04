import MageTable from "../components/Mage/MageTable";
import MeleeTable from "../components/Melee/MeleeTable";
import RangeTable from "../components/Range/RangeTable";

const EquipmentChecklist = () => {
  return (
    <div className="flex pt-24">
      <MeleeTable />
      <MageTable />
      <RangeTable />
    </div>
  );
};

export default EquipmentChecklist;
