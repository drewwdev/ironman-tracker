import EasyGoals from "../components/GeneralProgressionGoals/EasyGoals";
import MediumGoals from "../components/GeneralProgressionGoals/MediumGoals";

function GeneralProgressionGoals() {
  return (
    <div className="flex pt-24">
      <EasyGoals />
      <MediumGoals />
    </div>
  );
}

export default GeneralProgressionGoals;
