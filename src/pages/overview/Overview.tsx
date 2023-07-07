import MinigameAndBoss from "./components/Minigame&Boss";
import SkillsOverview from "./components/SkillsOverview";

function Overview() {
  return (
    <section className="flex flex-wrap justify-center">
      <SkillsOverview />
      <MinigameAndBoss />
    </section>
  );
}

export default Overview;
