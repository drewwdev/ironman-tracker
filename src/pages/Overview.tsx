import MinigameAndBoss from "../components/Overview/Minigame&Boss";
import SkillsOverview from "../components/Overview/SkillsOverview";

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
