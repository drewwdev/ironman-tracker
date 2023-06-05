import EasyGoals from "../components/GeneralProgressionGoals/EasyGoals";
import EliteGoals from "../components/GeneralProgressionGoals/EliteGoals";
import HardGoals from "../components/GeneralProgressionGoals/HardGoals";
import MasterGoals from "../components/GeneralProgressionGoals/MasterGoals";
import MediumGoals from "../components/GeneralProgressionGoals/MediumGoals";

function GeneralProgressionGoals() {
  return (
    <div className="flex pt-24">
      <EasyGoals />
      <MediumGoals />
      <HardGoals />
      <EliteGoals />
      <MasterGoals />
    </div>
  );
}

export default GeneralProgressionGoals;
