import EasyGoals from "./EasyGoals/components/EasyGoals";
import EliteGoals from "./EliteGoals/components/EliteGoals";
import HardGoals from "./HardGoals/components/HardGoals";
import MasterGoals from "./MasterGoals/components/MasterGoals";
import MediumGoals from "./MediumGoals/components/MediumGoals";

function GeneralProgressionGoals() {
  return (
    <div className="flex flex-wrap">
      <EasyGoals />
      <MediumGoals />
      <HardGoals />
      <EliteGoals />
      <MasterGoals />
    </div>
  );
}

export default GeneralProgressionGoals;
