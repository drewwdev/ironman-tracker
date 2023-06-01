import { getPlayerStats } from "../assets/utilities/getPlayerStats";
import MageTable from "../components/Mage/MageTable";
import MeleeTable from "../components/Melee/MeleeTable";
import RangeTable from "../components/Range/RangeTable";

getPlayerStats(1037113);

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
