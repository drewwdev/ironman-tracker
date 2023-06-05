import MinigameAndBoss from "./components/Minigame&Boss";
import SkillsOverview from "./components/SkillsOverview";

function Overview() {
  return (
    <section className="flex pt-24">
      <div className="p-10">
        <SkillsOverview />
      </div>
      <div className="p-10">
        <MinigameAndBoss />
      </div>
    </section>
  );
}

export default Overview;
