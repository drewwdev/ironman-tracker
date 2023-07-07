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
    <nav className="bg-white min-w-fit">
      <ul className="flex flex-col h-screen">
        {navbarItems.map((navbarItem) => (
          <Link
            key={navbarItem.text}
            className="px-5 pt-5 font-medium text-black "
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
