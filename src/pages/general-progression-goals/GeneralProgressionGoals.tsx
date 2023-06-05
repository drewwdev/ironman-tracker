import EasyGoals from "./components/EasyGoals";
import EliteGoals from "./components//EliteGoals";
import HardGoals from "./components//HardGoals";
import MasterGoals from "./components//MasterGoals";
import MediumGoals from "./components//MediumGoals";

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
