import MinigameAndBoss from "./components/Minigame&Boss";
import SkillsOverview from "./components/SkillsOverview";

function Overview() {
  return (
    <section className="flex">
      <div className="">
        <SkillsOverview />
      </div>
      <div className="">
        <MinigameAndBoss />
      </div>
    </section>
  );
}

export default Overview;
