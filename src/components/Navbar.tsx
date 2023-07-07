import { Link } from "react-router-dom";

const navbarItems = [
  { text: "Overview", path: "/overview" },
  { text: "General Progression Goals", path: "/general-progression-goals" },
  { text: "Equipment Checklist", path: "/equipment-checklist" },
  { text: "Boss Goals", path: "/boss-goals" },
  { text: "Skill Goals", path: "/skill-goals" },
  { text: "Pets", path: "/pets" },
  { text: "Diary Goals", path: "/diary-goals" },
  { text: "Clue Scrolls", path: "/clue-scrolls" },
  { text: "Non-tradeables & Rare Drops", path: "/nontradeables-raredrops" },
  { text: "Highscore Data", path: "/highscore-data" },
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
