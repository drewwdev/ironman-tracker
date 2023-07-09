import BossComponent, { Boss } from "./BossComponent";
import { bossLoot } from "./bossLoot";

function BossGoals() {
  const bosses: Boss[] = [
    "barrows",
    "dagannothPrime",
    "dagannothRex",
    "dagannothSupreme",
    "sarachnis",
    "zulrah",
    "kreeArra",
    "commanderZilyana",
    "generalGraardor",
    "krilTsutsaroth",
    "corporealBeast",
    "nex",
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {bosses.map((boss) => (
        <BossComponent key={boss} bossName={boss} loot={bossLoot[boss]} />
      ))}
    </div>
  );
}

export default BossGoals;
