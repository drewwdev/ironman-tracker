import EasyGoals from "./components/EasyGoals/EasyGoals";
import EliteGoals from "./components/EliteGoals/EliteGoals";
import HardGoals from "./components/HardGoals/HardGoals";
import MasterGoals from "./components/MasterGoals/MasterGoals";
import MediumGoals from "./components/MediumGoals/MediumGoals";

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
