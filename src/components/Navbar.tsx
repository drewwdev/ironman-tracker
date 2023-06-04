import { Link } from "react-router-dom";

const navbarItems = [
  { text: "Overview", path: "/Overview" },
  { text: "General Progression Goals", path: "/GeneralProgressionGoals" },
  { text: "Equipment Checklist", path: "/EquipmentChecklist" },
  { text: "Boss Goals", path: "/BossGoals" },
  { text: "Skill Goals", path: "/SkillGoals" },
  { text: "Pets", path: "/Pets" },
  { text: "Diary Goals", path: "/DiaryGoals" },
  { text: "Clue Scrolls", path: "/ClueScrolls" },
  { text: "Non-tradeables & Rare Drops", path: "/NonTradeablesRareDrops" },
  { text: "Highscore Data", path: "/HighscoreData" },
];

function Navbar() {
  return (
    <nav className="absolute top-0 bg-zinc-700">
      <ul className="flex justify-center">
        {navbarItems.map((navbarItem) => (
          <Link
            key={navbarItem.text}
            className="px-4 py-8 font-medium text-slate-200 hover:bg-slate-400 hover:text-zinc-700"
            to={navbarItem.path}
          >
            <li>{navbarItem.text}</li>
          </Link>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
